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
    type: DataTypes.DATE,
    allowNull: true,
  },
  market: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'market',  // Asegúrate de que el nombre coincida con el de la tabla
  timestamps: false    // Si la tabla no tiene campos `createdAt` y `updatedAt`, desactívalos
});


module.exports = Market;
