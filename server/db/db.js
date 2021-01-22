const { Sequelize } = require('sequelize');
const config = require ('../config/config');

exports.sequelize = new Sequelize(gDevConfig.database.db,
  gDevConfig.database.user, 
  gDevConfig.database.pass, {
    host: gDevConfig.database.host,
    dialect: 'mysql' 
  });
