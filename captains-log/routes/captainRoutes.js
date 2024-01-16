const express = require('express')

const router = express.Router()

const captainController = require('../controllers/captainController')

// index
router.get('/', captainController.logIndex)

// delete all route
router.get('/clear', captainController.logClear)

// new
router.get('/new', captainController.logNew)

// create route
router.post('/', captainController.logCreate)


module.exports = router