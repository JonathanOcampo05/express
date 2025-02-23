const PersonaRepository = require('../repositories/persona.repository');

class PersonaService {
  constructor() {
    this.personaRepository = new PersonaRepository();
  }

  // Obtener todas las personas
  async getAllPersonas() {
    try {
      return await this.personaRepository.getAllPersonas();
    } catch (error) {
      throw new Error(`Error en el servicio al obtener todas las personas: ${error.message}`);
    }
  }

  // Obtener una persona por ID
  async getPersonaById(id) {
    try {
      return await this.personaRepository.getPersonaById(id);
    } catch (error) {
      throw new Error(`Error en el servicio al obtener la persona por ID: ${error.message}`);
    }
  }

  // Obtener una persona por correo electrónico
  async getPersonaByEmail(email) {
    try {
      return await this.personaRepository.getPersonaByEmail(email);
    } catch (error) {
      throw new Error(`Error en el servicio al obtener la persona por correo: ${error.message}`);
    }
  }

  // Crear una nueva persona
  async createPersona(data) {
    try {
      return await this.personaRepository.createPersona(data);
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('El RFC o correo ya están registrados');
      }
      throw new Error(`Error en el servicio al crear la persona: ${error.message}`);
    }
  }

  // Actualizar una persona existente
  async updatePersona(id, data) {
    try {
      return await this.personaRepository.updatePersona(id, data);
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('El RFC o correo ya están registrados');
      }
      throw new Error(`Error en el servicio al actualizar la persona: ${error.message}`);
    }
  }

  // Eliminar una persona
  async deletePersona(id) {
    try {
      return await this.personaRepository.deletePersona(id);
    } catch (error) {
      throw new Error(`Error en el servicio al eliminar la persona: ${error.message}`);
    }
  }
}

module.exports = PersonaService;