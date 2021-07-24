'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('files', {
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
      path: {
        type: Sequelize.STRING, 
        allowNull: false,
        unique: true,
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
    return queryInterface.dropTable('files')
  }
};
