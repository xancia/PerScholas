const express = require('express')

const router = express.Router()

const commentControl = require('../controllers/commentController')

// index
router.get('/:postId', commentControl.index)

// delete
router.delete('/:postId/:commentId', commentControl.delete)

// update
router.put('/:postId/:commentId', commentControl.update)

// create
router.post('/:postId', commentControl.create)

// edit 
router.get('/:postId/:commentId', commentControl.edit)


module.exports = router