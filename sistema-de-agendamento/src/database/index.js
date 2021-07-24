import Sequelize from "sequelize";
import User from "../app/models/User";
import File from "../app/models/File";
import Appointment from "../app/models/Appointment";
import databaseConfig from "../config/database";

const models = [User, File, Appointment];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig); //criando a conexao com o banco de dados
        models
            .map(model => model.init(this.connection)) //passa a conexao para cada model
            .map(model => model.associate && model.associate(this.connection.models)) //se existe, executa
    }
}

export default new Database();
