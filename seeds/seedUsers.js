const { User } = require('../models');

const userData = [
  {
    name: 'John',
    email: 'john@gmail.com',
    password: '123123123',
    active_ind: '1',
  },
  {
    name: 'MJ',
    email: 'mj@gmail.com',
    password: '321321321',
    active_ind: '1',
  },
  {
    name: 'AJ',
    email: 'aj@gmail.com',
    password: '456456456',
    active_ind: '1',
  },
  {
    name: 'RJ',
    email: 'rj@gmail.com',
    password: '456456456',
    active_ind: '1',
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;