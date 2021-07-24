'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER, //int
        allowNull: false, //not null
        autoIncrement: true, //auto increment
        primaryKey: true,
      },
      date: {
        type: Sequelize.DATE, 
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'users',
          key: 'id' 
        },
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL',
        allowNull: true
      },
      collaborator_id: {
        type: Sequelize.INTEGER,
        references: { 
          model: 'users',
          key: 'id' 
        },
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL',
        allowNull: true
      },
      cancelled_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE, 
        allowNull: false, 
      },
      updated_at: {
        type: Sequelize.DATE, 
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('appointments')
  }
};
