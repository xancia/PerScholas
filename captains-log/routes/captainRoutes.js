const express = require('express')

const router = express.Router()

const captainController = require('../controllers/captainController')

router.get('/', captainController.logIndex)

router.get('/new', captainController.logNew)


module.exports = router