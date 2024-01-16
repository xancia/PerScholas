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

}


module.exports = {
    logIndex,
    logNew
}