const express = require('express')

const router = express.Router()

const fruitController = require('../controllers/fruitController')

// index route
router.get('/', fruitController.fruitIndex)

// seed route
router.get('/seed',fruitController.fruitSeed)

// new route
router.get('/new', fruitController.fruitNew)

//show route
router.get('/:id', fruitController.fruitShow)

// create route
router.post('/', fruitController.fruitCreate)

// edit route
router.get('/:id/edit', fruitController.fruitEdit)

// destroy route
router.delete('/:id', fruitController.fruitDelete)

// update route
router.put('/:id', fruitController.fruitUpdate)

module.exports = router