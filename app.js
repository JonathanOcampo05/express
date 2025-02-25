const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Importar las rutas
const personasRoutes = require('./routes/personas.routes');
const productosRoutes = require('./routes/producto.routes');


// Crear una instancia de Express
const app = express();

// Puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Middleware para analizar JSON
app.use(bodyParser.json());

// Rutas de la aplicación
app.use('/api/personas', personasRoutes);
app.use('/api/productos', productosRoutes);


// Conexión a MongoDB
mongoose.connect(
  'mongodb+srv://20233tn116:Jonysagan27k.@cluster0.s3okm.mongodb.net/inventario-db?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Ruta raíz para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});