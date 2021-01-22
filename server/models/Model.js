const {Sequelize} = require('sequelize');
const {sequelize} = require ("../db/db");


//setting up entities
const bitty = sequelize.define('bitty_url', {
    original_url: Sequelize.STRING(512),
    token: Sequelize.STRING,
  }, {
    tableName: 'bitty_url',
    timestamps: true,
    createdAt: true,
    updatedAt: false
  });

module.exports = bitty;