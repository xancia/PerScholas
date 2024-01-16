require('dotenv').config()

// Set Up section
const express = require('express')
const app = express()
const mongoConfig = require('./config')
const methodOverride = require('method-override')

const PORT = 5000

// set up engine
const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// Routers


//Middleware
app.use(express.urlencoded({extended:true})); // format post request
app.use(methodOverride('_method'))



// root route
app.get('/', (req,res) => {
    res.render('Index')
})


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    mongoConfig()
})
