const express = require('express');
const Product = require('../models/Product')
const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products)
});

productsRouter.get('/:id', (req, res) => {
  res.send(`Show user with ID ${req.params.id}`);
});

productsRouter.post('/create', async (req, res) => {
  const data = res.json(req.body);
  try {
    const newProduct = await Product.create(data);
    res.send(newProduct)
  } catch(err) {
    console.log(err)
    res.send(err)
  }
});

module.exports = productsRouter;
