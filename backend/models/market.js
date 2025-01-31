const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Market = sequelize.define('Market', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  card_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATEONLY, // DATE sin zona horaria
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_DATE'),
  },
  market: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'market',  
  timestamps: false   
});


module.exports = Market;
