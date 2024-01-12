const express = require('express')

const app = express()

const fruits = require('./models/fruits')

const PORT = 5000

// set up engine
const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// middleware
app.use(express.urlencoded({extended:true})); // format post request

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
        fruits: fruits[req.params.index],
        index: req.params.index
    })
})

// create route
app.post('/fruits', (req,res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    console.log(fruits)
    res.redirect('/fruits')
})

// edit route
app.get('/fruits/:index/edit', (req,res) => {
    res.render('Edit', {
        fruit: fruits[req.params.index]
    })
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})