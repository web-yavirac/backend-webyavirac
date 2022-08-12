// Routes for companies
const express = require('express');
const router = express.Router();
const companiesController = require('../controllers/companiesController');

// api/empresas
router.post('/', companiesController.crearCompanie);
router.get('/', companiesController.obtenerCompanies);
router.put('/:id', companiesController.actualizarCompanie);
router.get('/:id', companiesController.obtenerCompanie);
router.delete('/:id', companiesController.eliminarCompanie);

module.exports = router;