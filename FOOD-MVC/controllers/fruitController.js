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
        fruit: data
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


const fruitEdit = async (req,res) => {
    const data = await Fruit.findById(req.params.id)
    res.render('fruits/Edit', {
        fruit: data
    })
}


const fruitDelete = async (req, res) => {
    await Fruit.findByIdAndDelete(req.params.id)
    res.redirect('/fruits')
}


const fruitUpdate = async (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    // takes two ars, id and updates
    await Fruit.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/fruits/${req.params.id}`)
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