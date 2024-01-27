const service = require("../service/training")



function validateRequest(data){
 let errorsArray  = []

    data.players.forEach(player => {
     if(parseFloat(player.stats.power)  ){
      if(parseFloat(player.stats.power) < 0){
        errorsArray.push(`La potencia del jugador ${player.name} es menor a 0 `)
      }
     }else{
      errorsArray.push(`La potencia del jugador ${player.name} no es un numero `)
     }
     if(parseFloat(player.stats.speed.distance)  ){
      if(parseFloat(player.stats.speed.distance) < 0){
        errorsArray.push(`La distancia del jugador ${player.name} es menor a 0 `)
      }
     }else{
      errorsArray.push(`La distancia del jugador ${player.name} no es un numero `)
     }
     if(parseFloat(player.stats.speed.time)  ){
      if(parseFloat(player.stats.speed.time) <= 0){
        errorsArray.push(`El tiempo del jugador ${player.name} es menor o igual a 0 `)
      }
     }else{
      errorsArray.push(`El tiempo del jugador ${player.name} no es un numero `)
     }

     if(parseFloat(player.stats.passes)  ){
      if(parseFloat(player.stats.passes) < 0){
        errorsArray.push(`Los pases del jugador ${player.name} es menor a 0 `)
      }
     }else{
      errorsArray.push(`Los pases del jugador ${player.name} no es un numero `)
     }

    });

    return errorsArray
  
}

exports.postData = async (req, res) => {
    try {
      const data = req.body;

      let errors =  validateRequest(data)
      console.log(errors)
      if(errors.length > 0 ){
        res.status(400).send({'Errores:':errors})
      }else{
        const createdData = await service.postData(data);
        res.send({ data: createdData });
      }
    
    } catch (error) {
        console.log(error)
      res.status(500).send({ error: 'Error al crear los datos.' });
    }
  };
