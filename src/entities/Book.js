const {DataTypes} = require('sequelize')
const sequelize = require('../database')
const Borrow = require('./Borrow')

const Book = sequelize.define('Book', {
    code: {type: DataTypes.STRING, primaryKey: true},
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    stock: DataTypes.INTEGER,
})

Book.hasMany(Borrow, {foreignKey: 'bookCode'})
Borrow.belongsTo(Book, {foreignKey: 'bookCode'})

module.exports = Book