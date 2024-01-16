const mongoose = require('mongoose')

const mongoConfig = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGO_URL)
    console.log('database connected', result.connection.host)
    } catch(err){
        console.log('Mongo Error: ' + err)
    }
    
}

module.exports = mongoConfig