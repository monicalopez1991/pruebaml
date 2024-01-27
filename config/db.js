const mongoose = require("mongoose")
require("dotenv").config()

const DB_URI = process.env.DB_URI

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URI, {
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
}

module.exports = {connectToDatabase}


