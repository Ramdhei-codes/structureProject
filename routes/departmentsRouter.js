const express = require('express');
const router = express.Router();
const departmentsJSON = require('../departments.json');

router.get('/:departmentId', (req, res) => {
  const { departmentId } = req.params;

  const cityList = departmentsJSON.filter(
    (department) => department['c_digo_dane_del_departamento'] === departmentId
  );

  res.json(cityList);
});

module.exports = router;
