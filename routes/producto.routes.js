const express = require('express');
const ProductoController = require('../controllers/producto.controller');
const router = express.Router();

// Obtener todos los productos
router.get('/', ProductoController.getAllProductos);

// Crear productos
router.post('/', ProductoController.createProducto);

// Obtener producto por ID
router.get('/:id', ProductoController.getProductoById);

// Obtener producto por número de serie
router.get('/numSerie/:numSerie', ProductoController.getProductoByNumSerie);

module.exports = router;
