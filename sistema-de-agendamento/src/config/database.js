module.exports = { //dados do elephantsql
    dialect: 'postgres', //qual database usar
    host: 'batyr.db.elephantsql.com',
    username: 'rhkzylvw', //nome do username 
    password: 'QTyZUjFnzS2Ld0W4MD-p6xPRXalhoZP-', //senha passada pelo docker
    database: 'rhkzylvw', //nome da database
    define: {
        timestamps: true,
        underscored: true, //uso de underlines nas tabelas
        underscoredAll: true,
    }
}