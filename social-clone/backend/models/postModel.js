
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
   likes: { type: Number },
   body: { type: String },
   user: { type: String, default: 'Bob' },
   // comments field here
   comments: [{
      // an id referencing the comment document
      type: mongoose.Types.ObjectId,
      // search for it in the comments collection
      ref: 'comments'
   }]
}, { timestamps: true })

const Post = mongoose.model('posts', postSchema)

module.exports = Post