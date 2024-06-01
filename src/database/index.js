const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('library', 'postgres', 'qwerty', {
    host: 'localhost',
    dialect: 'postgres',
})

module.exports = sequelize