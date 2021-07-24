import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL, //existe apenas na model (virtual)
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            }, 
            {
                sequelize,
                tableName: 'users'
            }
        )

        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 10); //padrao de criptografia
            }
        })

        return this
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash)
    }
}

export default User;