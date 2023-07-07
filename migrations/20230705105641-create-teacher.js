'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teachers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        allowNull: false,
        type: Sequelize.STRING
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contact: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subject:{
        allowNull: false,
        type: Sequelize.STRING
      },
      Password:{
        allowNull:false,
        type:Sequelize.TEXT
      },
      is_delete:{
        defaultValue: 0,
        type: Sequelize.TINYINT
      },
      createdAt: {
        
        type: Sequelize.BIGINT(50)
      },
      updatedAt: {
        
        type: Sequelize.BIGINT(50)
      }


    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('teachers');
  }
};