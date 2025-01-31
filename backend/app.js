const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database'); // Tu configuración de Sequelize

// Rutas
const setRouter = require('./routes/sets');
const cardRouter = require('./routes/cards');

const app = express();
const PORT = 3001;
const MODE = process.env.NEXT_PUBLIC_MODE || "INDEFINIDO";


// Configurar CORS
app.use(cors({
  origin: `http://${MODE}:3000`, // Nombre del servicio frontend en Docker Compose
  credentials: true,
}));

// Middleware
app.use(express.json());

// Rutas
app.use('/api/sets', setRouter);
app.use('/api/cards', cardRouter);

// Función de reintento de conexión a la base de datos
async function connectWithRetry() {
  try {
    await sequelize.authenticate(); // Intentar la conexión a la base de datos
    console.log("Conexión a la base de datos establecida con éxito.");
    
    // Sincronizar los modelos con la base de datos
    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados correctamente.");
    


    
    // Iniciar el servidor después de la conexión exitosa
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://${MODE}:${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar a la base de datos, reintentando...", error);
    setTimeout(connectWithRetry, 5000); // Reintentar cada 5 segundos
  }
}

// Intentar conectar y reiniciar el proceso
connectWithRetry();
