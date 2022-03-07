const express = require('express');
const faker = require('faker');
const Router = express.Router();

Router.get('/', (req, res) => {
  res.json([
    {
      product: 'Element1',
      reference: {
        brand: 'Nike',
        price: 777,
        size: 's',
        cant: 12,
        color: {
          R: 3,
          G: 10,
          B: 0,
        },
      },
    },
  ]);
});

Router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  res.json({
    productId,
    name: 'Product2',
    image: 'kittens.jpg',
    description: 'A new product',
    price: 312000,
    reference: [
      {
        size: {
          option1: {
            specific_size: 'XS',
            specifications: {
              color: {
                option1: 'Azul',
                option2: 'Rojo',
              },
            },
          },
        },
      },
    ],
  });
});

Router.get('/faker_api/list-products', (req, res) => {
  const listP = [];

  for (let i = 0; i < 100; i++) {
    listP.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(listP);
});

Router.get('/page', (req, res) => {
  const arrayProductsFaker = [];

  const { limitOptional } = req.query;

  const cant_products = limitOptional || 10;

  for (let index = 0; index < cant_products; index++) {
    arrayProductsFaker.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(arrayProductsFaker);
});

module.exports = Router;
