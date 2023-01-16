const express = require('express');
const sequelize = require('../utilities/database')
const databaseRouter = express.Router();

databaseRouter.get('/test', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.send('Connection has been established successfully.')
  } catch (error) {
    res.send('Unable to connect to the database:', error);
  }
});

databaseRouter.get('/synch', async (req, res) => {
  try {
    await sequelize.sync();
    res.send("All models were synchronized successfully.");
  } catch (error) {
    res.send('Unable to synch', error);
  }
});

module.exports = databaseRouter;
