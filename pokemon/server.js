
const express = require("express");
const jsxEngine = require("jsx-view-engine");


const pokemon = require("./models/pokemon"); 


const pokemonRoutes = require("./routes/pokemonRoutes");


const app = express();
const PORT = 3000;


app.set("view engine", "jsx");

app.engine("jsx", jsxEngine());
app.use("/pokemon", pokemonRoutes); 



app.get("/", (req, res) => {
  res.send(`<a href="/pokemon">Go to /Pokemon to use</a>`);
});


app.listen(PORT, () => {
  console.log(`listening to port: ` + PORT);
});
