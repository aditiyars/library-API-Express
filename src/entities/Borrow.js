const {DataTypes} = require('sequelize')
const sequelize = require("../database");

const Borrow = sequelize.define('Borrow', {
    memberCode:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    bookCode:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    borrowDate: {
        type: DataTypes.DATE,
        allowNull:false,
    },
    returnDate:{
        type: DataTypes.DATE,
    }
})

module.exports = Borrow