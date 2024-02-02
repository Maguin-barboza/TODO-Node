const Sequelize = require('sequelize');
const sequelize = new Sequelize('todoNode', 'todouser', 'todopass', {dialect: 'mysql', host: 'localhost', port: '3306'})

module.exports = sequelize;