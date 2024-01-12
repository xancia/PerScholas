const express = require('express')

// method override needed to fix html forms to allow update and delete
const methodOverride = require('method-override')

const app = express()

const PORT = 5000

// set up engine
const jsxEngine = require('jsx-view-engine')
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

// Import Router
const fruitRoutes = require('./routes/fruitRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')
const meatRoutes = require('./routes/meatRoutes')

// middleware
app.use(express.urlencoded({extended:true})); // format post request
app.use(methodOverride('_method'))
app.use('/fruits',fruitRoutes)
app.use('/vegetables',vegetableRoutes)
app.use('/meats',meatRoutes)

// root route
app.get('/', (req,res) => {
    res.render('Home')
})


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})