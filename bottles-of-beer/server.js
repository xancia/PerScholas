const express = require('express')
const port = 5000
const app = express()

app.get("/", (req,res) => {
    res.send(`<p>99 bottles of beer on the wall.</p> <br/> <a href="/98"><p>take one down, pass it around</p></a> <br/> <p>98 bottles of beer on the wall</p>`)
})

app.get("/:number", (req,res) =>  {
    if(req.params.number >= 2) {
        res.send(`<p>${req.params.number} bottles of beer on the wall.</p> <br/> <a href="/${req.params.number - 1}"><p>take one down, pass it around</p></a> <br/> <p>${req.params.number - 1} bottles of beer on the wall</p>`)
    } else if (req.params.number = 1) {
        res.send(`<p>${req.params.number} bottles of beer on the wall.</p> <br/> <p>take one down, pass it around</p> <br/> <p>${req.params.number - 1} bottles of beer on the wall</p> <a href="/"><p>Start Over</p></a>`)
    } else {
        res.send('<p>Invalid number, please enter a number greater than 0</p>')
    }
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});