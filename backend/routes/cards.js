const express = require('express');
const Card = require('../models/card');
const Set = require('../models/set');
const router = express.Router();


// Obtener todos los sets
router.get('/', async (req, res) => {
  try {
    console.log("Iniciando la consulta...");
    const cards = await Card.findAll({
      limit: 20
    });
    console.log(`Cantidad de sets obtenidos: ${cards.length}`);

        // Convierte las instancias de Sequelize en objetos JSON
    const cardsJson = sets.map(card => card.toJSON()); 
  
    res.json(cardsJson);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
});


// Ruta para obtener todas las cartas de un set por ID
// Ruta para obtener un set específico por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID desde la URL

    const card = await Card.findOne({
      where: { id }
    });

    if (!card) {
      return res.status(404).json({ message: 'Carta no encontrado' });
    }

    res.json(card);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




module.exports = router;
