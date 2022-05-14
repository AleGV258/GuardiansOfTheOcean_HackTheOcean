const express = require('express');
const router = express.Router();
const animales = require('../services/animales');

router.get('/', function(req, res, next) {
  try {
    res.json(animales.getMultiple());
  } catch(err) {
    console.error(`Error obteniendo todos los datos`, err.message);
    next(err);
  }
});

router.get('/:animal', function(req, res, next) {
  const animal = req.params.animal
  try {
    res.json(animales.getAnimal(animal));
  } catch(err) {
    console.error(`Error obteniendo los datos del ${animal}`, err.message);
    next(err);
  }
});

module.exports = router;