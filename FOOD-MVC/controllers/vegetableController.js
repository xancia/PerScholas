const vegetables = require('../models/vegetables')

const vegetableIndex = (req,res) => {
    res.render('vegetables/VegetableIndex' , {
        vegetables: vegetables
    })
}

const vegetableNew = (req,res) => {
    res.render('vegetables/VegetableNew')
}


const vegetableShow = (req,res) => {
    res.render('vegetables/VegetableShow', {
        vegetables: vegetables[req.params.index],
        index: req.params.index
    })
}


const vegetableCreate = (req,res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables.push(req.body)
    console.log(vegetables)
    res.redirect('/vegetables')
}


const vegetableEdit = (req,res) => {
    res.render('vegetables/VegetableEdit', {
        vegetable: vegetables[req.params.index],
        index: req.params.index
    })
}


const vegetableDelete = (req, res) => {
    vegetables.splice(req.params.index, 1)
    res.redirect('/vegetables')
}


const vegetableUpdate = (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables[req.params.index] = req.body
    res.redirect(`/vegetables/${req.params.index}`)
}

module.exports = {
    vegetableIndex,
    vegetableNew,
    vegetableShow,
    vegetableCreate,
    vegetableEdit,
    vegetableDelete,
    vegetableUpdate
}