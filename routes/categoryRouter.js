const express = require('express');
const Router = express.Router();

Router.get('/:categoryId/products/:productId', (req, res) => {
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

module.exports = Router;
