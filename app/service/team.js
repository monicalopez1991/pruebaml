const model = require("../models/training")



const getDateStartWeek =  (date) => {
    // Clonar la date para evitar modificar la original
    const dateStartWeek = new Date(date);
  
    // Establecer el día de la semana al lunes (1)
    const weekDay = dateStartWeek.getDay();
    const daysUntilMonday = (weekDay === 0) ? 6 : weekDay - 1;
    dateStartWeek.setDate(dateStartWeek.getDate() - daysUntilMonday);
  
    // Establecer las horas, minutos, segundos y milisegundos a cero
    dateStartWeek.setHours(0, 0, 0, 0);
    
    return dateStartWeek;
  }

const getData = async () => {
    const currentDate = new Date()

    docs= await model.find({
        training_date: {
            $gte: getDateStartWeek(currentDate),
            $lte: currentDate
          }
    })

    if(docs.length < 3) {
        return "No hay suficiente informacion"
    }

    const playersMap = new Map();

    // Iterar sobre cada entrenamiento
    docs.forEach(training => {
    // Iterar sobre cada jugador en el entrenamiento
    training.players.forEach(player => {
        // Si el jugador ya está en el mapa, sumar su puntaje
        if (playersMap.has(player.id)) {
            playersMap.get(player.id).score += player.score;
        } else {
            // Si el jugador no está en el mapa, agregarlo con su puntaje
            playersMap.set(player.id, { id: player.id, name: player.name, score: player.score });
        }
    });
    });

    // Convertir el mapa de jugadores de nuevo a un array
    const groupPlayers = Array.from(playersMap.values());

    // Ordenar el array por puntaje de forma descendente
    const sortedPlayers =groupPlayers.sort((a, b) => b.score - a.score);
    
    // Tomar los primeros 5 jugadores
    const topPlayers = sortedPlayers.slice(0, 5);
        
            
        
    return { players: topPlayers };
   
    
}

module.exports = {getData, getDateStartWeek}