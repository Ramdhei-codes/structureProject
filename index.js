const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

//Get request
app.get('/dashboard', (req, res) => {
  res.send(`Executing using the port ${port}`);
});

app.get('/my-app', (req, res) => {
  res.send('Nueva ruta');
});

app.get('/products', (req, res) => {
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

app.get('/products/:productId', (req, res) => {
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

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json(
    (category = [
      {
        productId,
        name_category: 'Female',
        sub_category: [
          {
            productId,
            name: 'Product2',
            image:
              'https://www.google.com.co/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_PDP_1280_v1%2Ff_auto%2Cq_auto%3Aeco%2Fskwgyqrbfzhu6uyeh0gg%2Fair-max-270-shoes-7RW243.png&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fgb%2Ft%2Fair-max-270-shoes-7RW243&tbnid=JDke_HyXb5wozM&vet=12ahUKEwjbjtmB6KL2AhWyejABHSQxDKkQMygCegUIARDeAQ..i&docid=dkhj2QisESsNFM&w=1280&h=1600&q=nike&hl=en&ved=2ahUKEwjbjtmB6KL2AhWyejABHSQxDKkQMygCegUIARDeAQ',
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
          },
        ],
      },
    ])
  );
});

/*El query del request nos permite hacer peticiones con
argumentos no obligatorios, usado en paginación y filtros*/

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parámetros');
  }
});
