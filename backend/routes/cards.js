const express = require('express');
const Card = require('../models/card');
const Image = require('../models/image'); // Asegúrate de que Set esté siendo importado si lo usas en algún lugar
const Market = require('../models/market'); // Asegúrate de que Set esté siendo importado si lo usas en algún lugar
const router = express.Router();

// Obtener todas las cartas (limitadas a 20)
router.get('/', async (req, res) => {
  try {
    console.log("Iniciando la consulta...");
    const cards = await Card.findAll({
      limit: 20,
      include: [{
        model: Image,  // Incluir la imagen asociada
        as: 'image',   // El alias debe coincidir con el de la relación en el modelo
      }],
    });

    console.log(`Cantidad de cartas obtenidas: ${cards.length}`);

    // Convierte las instancias de Sequelize en objetos JSON y mapea la respuesta para incluir la imagen
    const cardsJson = cards.map(card => ({
      id: card.id,
      name: card.name,
      types: card.types,
      number: card.number,
      rarity: card.rarity,
      image: card.image ? card.image.url : "/images/default.png",  // Asegúrate de acceder correctamente a la URL de la imagen
    }));

    res.json(cardsJson);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Ruta para obtener una carta específica por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID desde la URL

    const card = await Card.findOne({
      where: { id },
      include: [{
        model: Image,  // Incluir la imagen asociada
        as: 'image',   // El alias debe coincidir con el de la relación en el modelo
      }, {
        model: Market,  // Incluir los mercados asociados a la carta
        as: 'markets',  // El alias para los mercados
      }],
    });

    if (!card) {
      return res.status(404).json({ message: 'Carta no encontrada' });
    }

    // Responder con todos los detalles de la carta, incluyendo la imagen y los mercados
    res.json({
      id: card.id,
      name: card.name,
      supertype: card.supertype,
      subtypes: card.subtypes,
      types: card.types,
      number: card.number,
      rarity: card.rarity,
      image: card.image ? card.image.url : "/images/default.png",  // Asegúrate de acceder correctamente a la URL de la imagen
      markets: card.markets.map(market => ({
        marketId: market.id,
        marketName: market.market, // Ajusta si el nombre del mercado tiene otro campo
        marketUrl: market.url, // Añade otros campos relacionados con el mercado
      })),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
