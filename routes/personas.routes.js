const express = require('express');
const PersonaController = require('../controllers/persona.controller');

const router = express.Router();

const personaController = new PersonaController();

router.get('/', (req, res) => personaController.getAll(req, res)); // Obtener todas las personas
router.get('/:id', (req, res) => personaController.getById(req, res)); // Obtener una persona por ID
router.get('/email/:email', (req, res) => personaController.getByEmail(req, res)); // Obtener por correo
router.post('/', (req, res) => personaController.create(req, res)); // Crear una nueva persona
router.put('/:id', (req, res) => personaController.update(req, res)); // Actualizar una persona
router.delete('/:id', (req, res) => personaController.delete(req, res)); // Eliminar una persona

module.exports = router;