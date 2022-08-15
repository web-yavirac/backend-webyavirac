// Routes for companies
const express = require('express');
const router = express.Router();
const companiesController = require('../controllers/companiesController');

// api/empresas
router.post('/', companiesController.crearCompanie);
router.get('/', companiesController.obtenerPCompanies);
router.put('/:id', companiesController.actualizarCompanie);
router.get('/:id', companiesController.obtenerCompanies);
router.delete('/:id', companiesController.eliminarCompanies);

module.exports = router;