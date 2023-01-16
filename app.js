const express = require('express');
const bodyParser = require('body-parser')
const databaseRouter = require('./routes/dbAdmin')
const productsRouter = require('./routes/products');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/dbAdmin', databaseRouter);
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
