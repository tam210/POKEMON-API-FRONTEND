const express = require('express');
const Set = require('../models/set');
const Card = require('../models/card');
const Image = require('../models/image');
const router = express.Router();

// Obtener todos los sets
router.get('/', async (req, res) => {
  try {
    console.log("Iniciando la consulta...");
    const sets = await Set.findAll({
      limit: 20
    });
    console.log(`Cantidad de sets obtenidos: ${sets.length}`);
    
    // Convierte las instancias de Sequelize en objetos JSON
    const setsJson = sets.map(set => set.toJSON()); 
  
    res.json(setsJson);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
});



// Ruta para obtener un set por ID con sus cartas e imágenes
// Ruta para obtener un set por ID con sus cartas e imágenes
router.get("/:id/cards", async (req, res) => {
  try {
    const { id } = req.params;

    // Buscamos el set por ID, incluyendo las cartas y las imágenes asociadas a cada carta
    const set = await Set.findOne({
      where: { id },
      include: [
        {
          model: Card,
          as: "cards",
          include: [{ model: Image, as: "image" }] // Incluimos las imágenes de las cartas
        },
      ],
    });

    // Verificamos si el set no existe
    if (!set) {
      return res.status(404).json({ message: "Set no encontrado" });
    }

    // Reestructuramos los datos para que solo devuelvan las cartas con sus imágenes
    const cards = set.cards.map((card) => ({
      id: card.id,
      name: card.name,
      image: card.image ? card.image : "/images/default.png", // Si no existe imagen, usamos la URL por defecto
    }));

    // Devolvemos solo las cartas con las imágenes
    res.json({ cards });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});




module.exports = router;
