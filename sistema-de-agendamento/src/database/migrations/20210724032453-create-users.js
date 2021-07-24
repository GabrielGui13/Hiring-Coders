'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER, //int
        allowNull: false, //not null
        autoIncrement: true, //auto increment
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING, //string
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING, 
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        defaultValue: false, //valor padrao
        allowNull: false, //
      },
      created_at: {
        type: Sequelize.DATE, // date
        allowNull: false, 
      },
      updated_at: {
        type: Sequelize.DATE, // date
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
};
