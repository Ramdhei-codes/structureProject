const express = require('express');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  app.use('/api/v1/products', productRouter);
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/categories', categoryRouter);
}

module.exports = routerApi;
