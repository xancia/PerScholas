const express = require('express')

const router = express.Router()

const meatController = require('../controllers/meatController')

// index route
router.get('/', meatController.meatIndex)

// new route
router.get('/new', meatController.meatNew)

//show route
router.get('/:index', meatController.meatShow)

// create route
router.post('/', meatController.meatCreate)

// edit route
router.get('/:index/edit', meatController.meatEdit)

// destroy route
router.delete('/:index', meatController.meatDelete)

// update route
router.put('/:index', meatController.meatUpdate)

module.exports = router