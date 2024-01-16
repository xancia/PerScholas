const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fruitSchema = new Schema({
    name:{type:String,required:true},
    color:{type:String},
    readyToEat:{type:Boolean}
})

// fruits is the name of collection, fruitschema is 
const Fruit = mongoose.model('fruits', fruitSchema)

module.exports = Fruit