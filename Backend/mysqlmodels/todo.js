const { Sequelize, DataTypes } = require('sequelize');

const db = require('../dbsql');
const Todo = db.define(
    'todos',
    {
        title: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.BOOLEAN,
        },
        description: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
    }
);
module.exports = Todo;
