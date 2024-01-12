const meats = require('../models/meats')

const meatIndex = (req,res) => {
    res.render('meats/Index' , {
        meats: meats
    })
}

const meatNew = (req,res) => {
    res.render('meats/New')
}


const meatShow = (req,res) => {
    res.render('meats/Show', {
        meats: meats[req.params.index],
        index: req.params.index
    })
}


const meatCreate = (req,res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    meats.push(req.body)
    console.log(meats)
    res.redirect('/meats')
}


const meatEdit = (req,res) => {
    res.render('meats/Edit', {
        meat: meats[req.params.index],
        index: req.params.index
    })
}


const meatDelete = (req, res) => {
    meats.splice(req.params.index, 1)
    res.redirect('/meats')
}


const meatUpdate = (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    meats[req.params.index] = req.body
    res.redirect(`/meats/${req.params.index}`)
}

module.exports = {
    meatIndex,
    meatNew,
    meatShow,
    meatCreate,
    meatEdit,
    meatDelete,
    meatUpdate
}