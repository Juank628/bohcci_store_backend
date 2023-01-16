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
  res.json(req.body);
  /*try {
    const newProduct = await Product.create({
      name: "Salida 1",
      description: "Salida de playa verde",
      sale: 50.5,
      price: 70.1,
      stock: 14,
      createdAt: Date.now(),
    });
    res.send(newProduct)
  } catch(err) {
    console.log(err)
    res.send(err)
  }*/
  
});

module.exports = productsRouter;
