const express = require('express');
const router = express.Router();

/*El query del request nos permite hacer peticiones con
argumentos no obligatorios, usado en paginación y filtros*/

router.get('/', (req, res) => {
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

router.get('/:limit/:country', (req, res) => {
  const { limit, country } = req.params;
  const {city} = req.query;

  // city ? res.json({

  // })
});

module.exports = router;
