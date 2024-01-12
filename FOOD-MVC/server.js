const express = require('express')

const app = express()

const fruits = require('./models/fruits')

const PORT = 5000

// set up engine
const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// root route
app.get('/', (req,res) => {
    res.send('Hello World!')
})

// index route
app.get('/fruits', (req,res) => {
    // res.send(fruits)
    res.render('Index' , {
        fruits: fruits
    })
})

// new route
app.get('/fruits/new', (req,res) => {
    res.render('New')
})

//show route
app.get('/fruits/:index', (req,res) => {
    // res.send(fruits[req.params.index])
    res.render('Show', {
        fruits: fruits[req.params.index]
    })
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})