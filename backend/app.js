const express = require('express');
const cors = require('cors');

// Rutas
const setRouter= require('./routes/sets');
const cardRouter = require('./routes/cards');

const sequelize = require('./config/database');
const app = express();
const PORT = 3001;



app.use(cors({ //cambiar a frontend
  origin: 'http://localhost:3000', // Asegúrate de que este sea el nombre del servicio frontend en Docker Compose
  credentials: true,
}));

// Middleware
app.use(express.json());

// Rutas
app.use('/api/sets', setRouter);
app.use('/api/cards', cardRouter);

// Iniciar el servidor
sequelize.sync({ alter: true }).then(() => {
  console.log("Modelos sincronizados correctamente.");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("Error de sincronización:", err);
});
