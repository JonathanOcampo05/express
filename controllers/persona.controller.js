const PersonaService = require('../service/persona.service');

class PersonaController {
  constructor() {
    this.personaService = new PersonaService();
  }

  // Obtener todas las personas
  async getAll(req, res) {
    try {
      const personas = await this.personaService.getAllPersonas();
      res.status(200).json(personas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener una persona por ID
  async getById(req, res) {
    const { id } = req.params;
    try {
      const persona = await this.personaService.getPersonaById(id);
      res.status(200).json(persona);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Obtener una persona por correo electrónico
  async getByEmail(req, res) {
    const { email } = req.params;
    try {
      const persona = await this.personaService.getPersonaByEmail(email);
      res.status(200).json(persona);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Crear una nueva persona
  async create(req, res) {
    const { nombre, apellido, fechaNacimiento, rfc, correo } = req.body;
    try {
      const nuevaPersona = await this.personaService.createPersona({
        nombre,
        apellido,
        fechaNacimiento,
        rfc,
        correo,
      });
      res.status(201).json(nuevaPersona);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Actualizar una persona existente
  async update(req, res) {
    const { id } = req.params;
    const data = req.body; // Datos a actualizar
    try {
      const personaActualizada = await this.personaService.updatePersona(id, data);
      res.status(200).json(personaActualizada);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Eliminar una persona
  async delete(req, res) {  
    const { id } = req.params;
    try {
      const personaEliminada = await this.personaService.deletePersona(id);
      res.status(200).json({ message: 'Persona eliminada correctamente', personaEliminada });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = PersonaController;