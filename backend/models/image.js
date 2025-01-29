const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Image = sequelize.define('Image', {
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
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'image',  // Asegúrate de que el nombre coincida con el de la tabla
  timestamps: false    // Si la tabla no tiene campos `createdAt` y `updatedAt`, desactívalos
});

module.exports = Image;
