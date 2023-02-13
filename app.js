require('dotenv').config();
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const databaseRouter = require('./routes/dbAdmin')
const productsRouter = require('./routes/products');
const app = express();
const corsOptions = {
  origin: process.env.CORS_URL,
  optionsSuccessStatus: 200,
}

dotenv.config();

app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/dbAdmin', databaseRouter);
app.use('/products', productsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
  console.log(corsOptions)
});
