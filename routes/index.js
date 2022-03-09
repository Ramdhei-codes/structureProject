const express = require('express');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const departmentsRouter = require('./departmentsRouter');
const marvelRouter = require('./marvelRouter');

function routerApi(app) {
  const router = express.Router();
  //Static route of the API
  app.use('/api/v1', router);

  //Endpoints for resources
  router.use('/products', productRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoryRouter);
  router.use('/departments', departmentsRouter);
  router.use('/marvel', marvelRouter);
}

module.exports = routerApi;
