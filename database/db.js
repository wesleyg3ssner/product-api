const { Sequelize, DataTypes } = require('sequelize')

/* 

Altere as seguintes informações de acordo com suas configurações:

const sequelize = new Sequelize('database', 'user', 'password', {
    hostname: 'localhost',
    dialect: 'mysql'
})

*/

const sequelize = new Sequelize('api', 'wes', '123', {
    hostname: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize,
    sequelize,
    DataTypes
}