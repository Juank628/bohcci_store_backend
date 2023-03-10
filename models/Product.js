const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/database');

const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  sale: DataTypes.FLOAT,
  price: DataTypes.FLOAT,
  stock: DataTypes.TEXT,
  family: DataTypes.STRING,
});

module.exports = Product;
