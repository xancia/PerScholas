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
const captainRoutes = require('./routes/captainRoutes')


//Middleware
app.use(express.urlencoded({extended:true})); // format post request
app.use(methodOverride('_method'))
app.use('/logs',captainRoutes)


// root route
app.get('/', (req,res) => {
    res.send('<a href="/logs">Go to /logs</a>')
})


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    mongoConfig()
})
