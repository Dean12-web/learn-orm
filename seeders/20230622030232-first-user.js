'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      email: 'rifqi@example.com',
      password: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'gema@example.com',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'fahmi@example.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'gilang@example.com',
      password: '12',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'yurza@example.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'ian@example.com',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      email: 'yudi@example.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
  }
};
