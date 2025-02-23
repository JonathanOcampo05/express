const Persona = require('../models/persona.model');

class PersonaRepository {
  
  async getAllPersonas() {
    try {
      const personas = await Persona.find(); 
      return personas;
    } catch (error) {
      throw new Error(`Error al obtener todas las personas: ${error.message}`);
    }
  }

  // Método para obtener una persona por su ID
  async getPersonaById(id) {
    try {
      const persona = await Persona.findById(id); 
      if (!persona) {
        throw new Error('Persona no encontrada'); 
      }
      return persona;
    } catch (error) {
      throw new Error(`Error al obtener la persona por ID: ${error.message}`);
    }
  }

  // Método para obtener una persona por su correo electrónico
  async getPersonaByEmail(email) {
    try {
      const persona = await Persona.findOne({ correo: email }); 
      if (!persona) {
        throw new Error('Persona no encontrada con el correo proporcionado');
      }
      return persona;
    } catch (error) {
      throw new Error(`Error al obtener la persona por correo: ${error.message}`);
    }
  }

  // Método para crear una nueva persona
  async createPersona(data) {
    try {
      const nuevaPersona = new Persona(data); 
      const personaGuardada = await nuevaPersona.save(); 
      return personaGuardada;
    } catch (error) {
      
      if (error.code === 11000) {
        throw new Error('El RFC o correo ya están registrados');
      }
      throw new Error(`Error al crear la persona: ${error.message}`);
    }
  }

  // Método para actualizar una persona existente
  async updatePersona(id, data) {
    try {
      const personaActualizada = await Persona.findByIdAndUpdate(
        id,
        { $set: data }, 
        { new: true, runValidators: true } 
      );
      if (!personaActualizada) {
        throw new Error('Persona no encontrada'); 
      }
      return personaActualizada;
    } catch (error) {
      
      if (error.code === 11000) {
        throw new Error('El RFC o correo ya están registrados');
      }
      throw new Error(`Error al actualizar la persona: ${error.message}`);
    }
  }

  // Método para eliminar una persona por su ID
  async deletePersona(id) {
    try {
      const personaEliminada = await Persona.findByIdAndDelete(id); 
      if (!personaEliminada) {
        throw new Error('Persona no encontrada'); 
      }
      return personaEliminada;
    } catch (error) {
      throw new Error(`Error al eliminar la persona: ${error.message}`);
    }
  }
}

module.exports = PersonaRepository;