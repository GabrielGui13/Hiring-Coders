import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Appointment extends Model {
    static init(sequelize) {
        super.init(
            {
                date: Sequelize.DATE,
                cancelled_at: Sequelize.DATE,
            }, 
            {
                sequelize,
                tableName: 'appointments'
            }
        )

        return this
    }

    static associate(models) {
        this.belongsTo(models.User, { 
            foreignKey: 'user_id',
            as: 'user'
        })
        this.belongsTo(models.User, { 
            foreignKey: 'collaborator_id',
            as: 'collaborator'
        })
    }

}

export default Appointment;