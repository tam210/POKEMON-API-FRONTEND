const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST || '172.19.0.2', // Usa 'db' si está en docker-compose
  dialect: 'postgres',
  username: process.env.DB_USER || 'ash',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'pokemon_db',
  logging: false,
});

module.exports = sequelize;
