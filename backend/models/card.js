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
  subtypes: {
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
  tableName: 'card',  
  timestamps: false    
});

// Relación entre Card y Image
Card.hasOne(Image, { foreignKey: 'card_id', as: 'image' });
Image.belongsTo(Card, { foreignKey: 'card_id', as: 'card' });

// Relación entre Card y Market
Card.hasMany(Market, { foreignKey: 'card_id', as: 'markets' });
Market.belongsTo(Card, { foreignKey: 'card_id', as: 'card' });

module.exports = Card;
