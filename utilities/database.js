const { Sequelize } = require('sequelize');
const { dbConnectionUrl } = require('./secrets')

const sequelize = new Sequelize(dbConnectionUrl)

module.exports = sequelize