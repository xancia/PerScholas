const Log = require('../models/Logs')


const logIndex = async (req,res) => {
    try{
        const data = await Log.find()
        console.log('data', data)
        res.render('Index' , {
            logs: data
        })
    } catch(err){
        res.send('There is an error')
        console.log('error : ', err)
    }
    
}

const logNew = async (req,res) => {
        res.render('New')
}


const logCreate = async (req,res) => {
    if (req.body.shipIsBroken === 'on') {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    console.log(req.body)
    try{
        const result = await Log.create(req.body)
        console.log('data saved: ',result)
    }catch(err){
        console.log('error : ', err)
    }
    res.redirect('/logs')
}

const logClear = async (req,res) => {
    await Log.deleteMany()
    res.redirect('/logs')
}


module.exports = {
    logIndex,
    logNew,
    logCreate,
    logClear
}