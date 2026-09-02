const express = require('express');
const router = express.Router();

// Ruta para Registrar Usuario
router.post('/register', (req, res) => {
  const { nombre, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email y contraseña son obligatorios."
    });
  }

  res.status(201).json({
    success: true,
    message: "Usuario registrado correctamente",
    data: { id: Date.now(), nombre, email }
  });
});

// Ruta para Iniciar Sesión (Login)
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Por favor ingrese email y contraseña."
    });
  }

  res.status(200).json({
    success: true,
    message: "Inicio de sesión exitoso",
    token: "jwt_token_de_ejemplo_123456"
  });
});

module.exports = router;