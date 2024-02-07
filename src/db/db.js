const Sequelize = require('sequelize');

const sequelize = new Sequelize('todoNode', 'todouser', 'todopass', {dialect: 'mysql', host: 'mysql', port: '3306'})

module.exports = sequelize;