const express = require('express');
const app = express();

// Middleware para procesar datos JSON en las peticiones
app.use(express.json());

// Importar e integrar las rutas de autenticación
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});