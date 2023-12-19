const { User } = require('../models');

const userData = [
  {
    name: 'John',
    email: 'john@gmail.com',
    password: 'password12345',
    active_ind: '1',
  },
  {
    name: 'MJ',
    email: 'mj@gmail.com',
    password: 'password12345',
    active_ind: '1',
  },
  {
    name: 'AJ',
    email: 'aj@gmail.com',
    password: 'password12345',
    active_ind: '1',
  },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;