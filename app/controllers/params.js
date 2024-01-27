const model = require("../models/params")

exports.putData = async (req, res) => {
    try {
      const data = req.body;
      const filter = { id:1 }; 
      const updated = { $set: {numberOfPlayers: data.numberOfPlayers, 
        powerPercentage: data.powerPercentage, speedPercentage:data.speedPercentage, 
        passesPercentage:data.passesPercentage} };
      const options = { upsert: true };
      await model.updateOne(filter,updated,options);
      res.send("Parametros actualizados");
    } catch (error) {
        console.log(error)
      res.status(500).send({ error: 'Error al crear los datos.' });
    }
  };