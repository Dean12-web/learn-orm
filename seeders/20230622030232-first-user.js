'use strict';
const { hashPassword } = require('../helpers/util');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      email: 'rifqi@example.com',
      password: hashPassword('12345'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'gema@example.com',
      password: hashPassword('123'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'fahmi@example.com',
      password: hashPassword('1234'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'gilang@example.com',
      password: hashPassword('12'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'yurza@example.com',
      password: hashPassword('123456'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'ian@example.com',
      password: hashPassword('123'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'yudi@example.com',
      password: hashPassword('1234'),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
  }
};
