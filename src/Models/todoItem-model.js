const {sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');

const TodoItem = db.define('TodoItem', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {tableName: 'TodoItems', timestamps: false});

module.exports = TodoItem;