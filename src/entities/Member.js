const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Member = sequelize.define('Member', {
  code: { type: DataTypes.STRING, primaryKey: true },
  name: DataTypes.STRING,
  penaltyEndDate: DataTypes.DATE,
});

module.exports = Member;