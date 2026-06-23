// Base de datos temporal en memoria (Array) para la evidencia del SENA
const usuariosDB = [];

// 1. Controlador para Registrar un Usuario
const registrarUsuario = (req, res) => {
    const { usuario, contrasena } = req.body;

    // Validación de Código Limpio: Validar que los campos no estén vacíos
    if (!usuario || !contrasena) {
        return res.status(400).json({ 
            mensaje: "Error: El usuario y la contraseña son obligatorios." 
        });
    }

    // Validación: Verificar si el usuario ya existe en nuestro array
    const usuarioExiste = usuariosDB.find(u => u.usuario === usuario);
    if (usuarioExiste) {
        return res.status(400).json({ 
            mensaje: "Error: El nombre de usuario ya está registrado." 
        });
    }

    // Guardar el usuario en nuestra "base de datos" temporal
    usuariosDB.push({ usuario, contrasena });

    return res.status(201).json({ 
        mensaje: "Usuario registrado con éxito de manera satisfactoria." 
    });
};

// 2. Controlador para el Inicio de Sesión (Login)
const iniciarSesion = (req, res) => {
    const { usuario, contrasena } = req.body;

    // Validación: Campos obligatorios
    if (!usuario || !contrasena) {
        return res.status(400).json({ 
            mensaje: "Error: Por favor complete todos los campos." 
        });
    }

    // Buscar al usuario y comprobar si la contraseña coincide
    const usuarioEncontrado = usuariosDB.find(u => u.usuario === usuario && u.contrasena === contrasena);

    if (!usuarioEncontrado) {
        return res.status(401).json({ 
            mensaje: "Error: Credenciales incorrectas. Autenticación fallida." 
        });
    }

    return res.status(200).json({ 
        mensaje: "Autenticación satisfactoria. ¡Bienvenido al sistema!" 
    });
};

// Exportar las funciones para que server.js las pueda usar
module.exports = {
    registrarUsuario,
    iniciarSesion
};
