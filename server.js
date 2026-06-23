const express = require('express');
const authController = require('./controllers/authController');

const app = express();
const PORT = 3000; 

// Middleware para leer formato JSON
app.use(express.json());

// Rutas de la evidencia
app.post('/api/registrar', authController.registrarUsuario);
app.post('/api/login', authController.iniciarSesion);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});