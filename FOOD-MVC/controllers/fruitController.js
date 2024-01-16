const fruits = require('../models/fruits')
const Fruit = require('../models/Fruit')

const fruitIndex = async (req,res) => {
    try{
        const data = await Fruit.find()
        console.log('data from mongo: ', data)
        res.render('fruits/Index' , {
            fruits: data
        })
    } catch(err){
        res.send('There is an error')
        console.log('error : ', err)
    }
    
}

const fruitNew = (req,res) => {
    res.render('fruits/New')
}


const fruitShow = async (req,res) => {
    const data = await Fruit.findById(req.params.id)
    res.render('fruits/Show', {
        fruits: data,
        index: req.params.index
    })
}


const fruitCreate = async (req,res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try{
        const result = await Fruit.create(req.body)
        console.log('data saved: ',result)
    }catch(err){
        console.log('error : ', err)
    }
    fruits.push(req.body)
    console.log(fruits)
    res.redirect('/fruits')
}


const fruitEdit = (req,res) => {
    res.render('fruits/Edit', {
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