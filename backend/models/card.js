const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Image = require('./image');
const Market = require('./market');

const Card = sequelize.define('Card', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  supertype: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  types: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  set_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references:{
      model: 'set',
      key: 'id'
    }
  },
  number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rarity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'card',  // Asegúrate de que el nombre coincida con el de la tabla
  timestamps: false    // Si la tabla no tiene campos `createdAt` y `updatedAt`, desactívalos
});

// Relación entre Card y Image
Card.hasMany(Image, { foreignKey: 'card_id' });
Image.belongsTo(Card, { foreignKey: 'card_id' });

// Relación entre Card y Market
Card.hasMany(Market, { foreignKey: 'card_id' });
Market.belongsTo(Card, { foreignKey: 'card_id' });

module.exports = Card;
