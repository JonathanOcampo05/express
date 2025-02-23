


const mongoose = require('mongoose');

// Definición del esquema
const personaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'], // Campo requerido
    trim: true, // Elimina espacios en blanco al inicio y al final
  },
  apellido: {
    type: String,
    required: [true, 'El apellido es obligatorio'], // Campo requerido
    trim: true, // Elimina espacios en blanco al inicio y al final
  },
  fechaNacimiento: {
    type: Date,
    required: [true, 'La fecha de nacimiento es obligatoria'], // Campo requerido
  },
  rfc: {
    type: String,
    required: [true, 'El RFC es obligatorio'], // Campo requerido
    unique: true, // El RFC debe ser único
    trim: true, // Elimina espacios en blanco al inicio y al final
    uppercase: true, // Convierte el RFC a mayúsculas
  },
  correo: {
    type: String,
    required: [true, 'El correo es obligatorio'], // Campo requerido
    trim: true, // Elimina espacios en blanco al inicio y al final
    lowercase: true, // Convierte el correo a minúsculas
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Por favor, ingresa un correo electrónico válido',
    ], // Validación de formato de correo
  },
}, {
  timestamps: true, // Agrega campos createdAt y updatedAt automáticamente
});

// Creación del modelo
const Persona = mongoose.model('Persona', personaSchema);

module.exports = Persona;