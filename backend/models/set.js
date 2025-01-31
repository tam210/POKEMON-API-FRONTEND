const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Card = require('./card');

const Set = sequelize.define('Set', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  series: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  printed_total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ptcgo_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.STRING, // TIMESTAMP con zona horaria
  },
  symbol_url: {
    type: DataTypes.STRING,
  },
  logo_url: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'set',  
  timestamps: false    
});

// Relación entre Set y Card
Set.hasMany(Card, { foreignKey: 'set_id', as: 'cards' });
Card.belongsTo(Set, { foreignKey: 'set_id', as: 'set' });

module.exports = Set;
