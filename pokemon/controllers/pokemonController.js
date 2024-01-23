const pokemon = require("../models/pokemon");


const pokemonIndex = (req, res) => {
  res.render("Index", { pokemon: pokemon });
};

const pokemonShow = (req, res) => {
  res.render("Show", { pokemon: pokemon[req.params.index] });
};


module.exports = {
  pokemonIndex,
  pokemonShow,
};
