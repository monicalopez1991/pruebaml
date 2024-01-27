const mongoose = require("mongoose")

const playerSchema = new mongoose.Schema(
    {
     name:{
       type: String
     },
     id: {
        type:Number,

     },
     score:{
        type:Number
     }

    }
  
)

const trainingSchema = new mongoose.Schema(
    {
     training_date:{
        type: Date
     },
     players: [playerSchema]

    }

    

)

trainingSchema.set('validateBeforeSave', false);
playerSchema.set('validateBeforeSave', false);

module.exports = mongoose.model("training", trainingSchema)