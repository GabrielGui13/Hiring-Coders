import Sequelize from "sequelize";
import mongoose from "mongoose";
import User from "../app/models/User";
import File from "../app/models/File";
import Appointment from "../app/models/Appointment";
import databaseConfig from "../config/database";

const models = [User, File, Appointment];

class Database {
    constructor() {
        this.init();
        this.mongo();
    }

    init() {
        this.connection = new Sequelize(databaseConfig); //criando a conexao com o banco de dados
        models
            .map(model => model.init(this.connection)) //passa a conexao para cada model
            .map(model => model.associate && model.associate(this.connection.models)) //se existe, executa
    }

    mongo() {
        this.mongoConnection = mongoose.connect(
            'mongodb+srv://sistemadeagendamento:<password>@cluster0.wbp4x.mongodb.net/sistema?retryWrites=true&w=majority',
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
    }
}

export default new Database();
