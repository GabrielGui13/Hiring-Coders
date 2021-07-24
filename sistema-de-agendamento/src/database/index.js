import Sequelize from "sequelize";
import User from "../app/models/User";
import databaseConfig from "../config/database";

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig); //criando a conexao com o banco de dados
        models.map(model => model.init(this.connection)); //passa a conexao para cada model
    }
}

export default new Database();
