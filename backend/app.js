const express = require('express');

// Rutas
const setRouter= require('./routes/sets');
const cardRouter = require('./routes/cards');



const sequelize = require('./config/database');
const app = express();
const PORT = 3001;
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use('/sets', setRouter);
app.use('/cards', cardRouter);

// Iniciar el servidor
sequelize.sync({ alter: true }).then(() => {
  console.log("Modelos sincronizados correctamente.");
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("Error de sincronización:", err);
});
