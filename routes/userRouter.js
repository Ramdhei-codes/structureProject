const express = require('express');
const Router = express.Router();

/*El query del request nos permite hacer peticiones con
argumentos no obligatorios, usado en paginación y filtros*/

Router.get('/', (req, res) => {
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

module.exports = Router;
