const express = require('express');
const Set = require('../models/set');
const Card = require('../models/card');
const router = express.Router();

// Obtener todos los sets
router.get('/', async (req, res) => {
  try {
    console.log("Iniciando la consulta...");
    const sets = await Set.findAll({
      limit: 20
    });
    console.log(`Cantidad de sets obtenidos: ${sets.length}`);
    res.json(sets);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Ruta para obtener un set específico por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID desde la URL

    const set = await Set.findOne({
      where: { id }
    });

    if (!set) {
      return res.status(404).json({ message: 'Set no encontrado' });
    }

    res.json(set);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Obtener todas las cartas de un set específico
router.get('/:setId/cards', async (req, res) => {
  try {
    const { setId } = req.params;  // Obtener el ID del set desde los parámetros de la URL

    // Buscar las cartas que pertenecen al set con el ID dado
    const cards = await Card.findAll({
      where: { set_id: setId },  // Filtrar por set_id
      limit: 20,  // Limitar la cantidad de resultados
    });

    // Si no se encuentran cartas para ese set
    if (cards.length === 0) {
      return res.status(404).json({ message: 'No se encontraron cartas para este set' });
    }

    // Enviar las cartas como respuesta
    res.json(cards);
  } catch (error) {
    // Manejar errores
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
