// Routes for companies
const express = require('express');
const router = express.Router();
const companiesController = require('../controllers/companiesController');

// api/productos
router.post('/', companiesController.crearCompanies);
router.get('/', companiesController.obtenerPCompanies);
router.put('/:id', companiesController.actualizarCompanies);
router.get('/:id', companiesController.obtenerCompanies);
router.delete('/:id', companiesController.eliminarCompanies);

module.exports = router;