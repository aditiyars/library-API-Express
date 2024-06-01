const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Borrow = require('./Borrow')

const Member = sequelize.define('Member', {
  code: { type: DataTypes.STRING, primaryKey: true },
  name: DataTypes.STRING,
  penaltyEndDate: DataTypes.DATE,
});

Member.hasMany(Borrow, {foreignKey:'memberCode'})
Borrow.belongsTo(Member, {foreignKey: 'memberCode'})

module.exports = Member;