const fruits = require('../models/fruits')

const fruitIndex = (req,res) => {
    res.render('Index' , {
        fruits: fruits
    })
}

const fruitNew = (req,res) => {
    res.render('New')
}


const fruitShow = (req,res) => {
    res.render('Show', {
        fruits: fruits[req.params.index],
        index: req.params.index
    })
}


const fruitCreate = (req,res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits.push(req.body)
    console.log(fruits)
    res.redirect('/fruits')
}


const fruitEdit = (req,res) => {
    res.render('Edit', {
        fruit: fruits[req.params.index],
        index: req.params.index
    })
}


const fruitDelete = (req, res) => {
    fruits.splice(req.params.index, 1)
    res.redirect('/fruits')
}


const fruitUpdate = (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits[req.params.index] = req.body
    res.redirect(`/fruits/${req.params.index}`)
}

module.exports = {
    fruitIndex,
    fruitNew,
    fruitShow,
    fruitCreate,
    fruitEdit,
    fruitDelete,
    fruitUpdate
}