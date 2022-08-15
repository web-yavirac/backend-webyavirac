// Routes for companies
const express = require('express');
const router = express.Router();
const careersController = require('../controllers/careersController');

// api/empresas
router.post('/', careersController.crearCareer);
router.get('/', careersController.obtenerCoareers);
router.put('/:id', careersController.actualizarCareer);
router.get('/:id', careersController.obtenerCareer);
router.delete('/:id', careersController.eliminarCareer);

module.exports = router;