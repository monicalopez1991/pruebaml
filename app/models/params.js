const mongoose = require("mongoose")

const paramsSchema = new mongoose.Schema(
    {
     numberOfPlayers:{
       type: Number
     },
     powerPercentage: {
        type:Number,

     },
     speedPercentage:{
        type:Number
     },
     passesPercentage: {
        type:Number,

     },
    id: {
        type: Number,
        unique: true
    }

    }
  
)

module.exports = mongoose.model("params", paramsSchema)