'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'photo_id', 
      {
        type: Sequelize.INTEGER,
        references: { 
          model: 'files', //referencia a table files
          key: 'id' 
        }, //a chave estrangeira eh id
        onUpdate: 'CASCADE', 
        onDelete: 'SET NULL',
        allowNull: true
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'photo_id')
  }
};
