const express = require('express');
const Product = require('../models/Product')
const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {
  const products = await Product.findAll();
  const adaptedProducts = products.map(product => {
    return({
      ...product.dataValues,
      stock: JSON.parse(product.dataValues.stock)
    })
  })
  res.json(adaptedProducts);
});

productsRouter.get('/:id', (req, res) => {
  res.send(`Show user with ID ${req.params.id}`);
});

productsRouter.post('/create', async (req, res) => {
  const productData = req.body;
  const adaptedProduct = {
    ...productData,
    stock: JSON.stringify(productData.stock)
  }
  try {
    const newProduct = await Product.create(adaptedProduct);
    res.json(newProduct)
  } catch(err) {
    console.log(err)
    res.send(err)
  }
});

module.exports = productsRouter;
