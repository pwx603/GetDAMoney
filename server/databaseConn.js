const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/postgres');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });