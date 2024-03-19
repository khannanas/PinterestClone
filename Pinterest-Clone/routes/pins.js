const mongoose = require('mongoose');

// Pins Schema - things which will required for Pins/Posts
const pinsSchema = mongoose.Schema({

  user: {
    // Every pins will have its own unique id based on its user
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  title:String,
  description:String,
  image:String
})


module.exports = mongoose.model("pins",pinsSchema)