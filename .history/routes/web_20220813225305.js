
const express = require('express');
const router = express.Router();
const companiesController = require('../controllers/companiesController');
const careersController = require('../controllers/careersController');


// api/empresas
router.post('/', companiesController.crearCompanie);
router.get('/', companiesController.obtenerCompanies);
router.put('/:id', companiesController.actualizarCompanie);
router.get('/:id', companiesController.obtenerCompanie);
router.delete('/:id', companiesController.eliminarCompanie);



// api/carreras
router.post('/', careersController.crearCareer);
router.get('/', careersController.obtenerCareers);
router.put('/:id', careersController.actualizarCareer);
router.get('/:id', careersController.obtenerCareer);
router.delete('/:id', careersController.eliminarCareer);

module.exports = router;