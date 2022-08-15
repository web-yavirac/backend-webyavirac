
const express = require('express');
const router = express.Router();
const companiesController = require('../controllers/companiesController');
const careersController = require('../controllers/careersController');


// api/empresas
router.post('/empresas', companiesController.crearCompanie);
router.get('/crearEmpresas', companiesController.obtenerCompanies);
router.put('/empresas/:id', companiesController.actualizarCompanie);
router.get('/empresas/:id', companiesController.obtenerCompanie);
router.delete('/empresas/:id', companiesController.eliminarCompanie);



// api/carreras
router.post('/carreras', careersController.crearCareer);
router.get('/carreras', careersController.obtenerCareers);
router.put('/carreras/:id', careersController.actualizarCareer);
router.get('/carreras/:id', careersController.obtenerCareer);
router.delete('/carreras/:id', careersController.eliminarCareer);

module.exports = router;