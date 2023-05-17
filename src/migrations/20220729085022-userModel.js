'use strict';

const Sequelize = require('sequelize')
module.exports = {
  async up(queryInterface, sequelize) {

    await queryInterface.createTable('consumers', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      token: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      middleName: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      otp: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      contactNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      mobileNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      // createdAt, lastUpdatedAt and deletedAt managed by Sequelize
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
  },

  async down(queryInterface, sequelize) {
    
    await queryInterface.dropTable('users');
  }
};
