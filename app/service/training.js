const model = require("../models/training")
const paramsModel = require("../models/params")

let params

const postData = async (data) => {
    

    params = await paramsModel.findOne({
      id : 1
    })

    const players = data.players.map(player => convert(player))
    const training = {
        players: players,
        training_date: new Date().toDateString()
    }

    await model.create(training);
      
  };

  function convert(player){
    const speed = calculateSpeed(player.stats.speed.distance, player.stats.speed.time);
    const score = calculateScore(player.stats.power,speed, player.stats.passes)
    const newPlayer = {
        name: player.name,
        id: player.id,
        score: score
    }
    return newPlayer
  }


//Functions

function calculateSpeed(distance,time){
    const speed = distance/time;
    return speed;
  }


  function calculateScore(power,speed, passes ){
    const score = power * (params.powerPercentage/100) + speed * (params.speedPercentage/100) + passes * (params.passesPercentage/100);
    return score
  }


  module.exports = {postData}




  
