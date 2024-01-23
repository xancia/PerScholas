
const express = require("express");

const router = express.Router();

const pokemonController = require('../controllers/pokemonController')

// index route
router.get('/', pokemonController.pokemonIndex)

// show route
router.get('/:index', pokemonController.pokemonShow)

module.exports = router