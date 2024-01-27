# Futbol
## Descripción 

Futbol es un sistema desarrollado en NodeJs, que le permite al director tecnico de un equipo de futbol tener el control de sus entrenamientos; y dependiendo de los resultados obtener una lista de sus jugadores titulares para el juego de la semana.


## Requerimientos

Node js v19.6.0
npm v9.4.1
Docker compose o Mongodb

## Instalacion

### Docker :
```bash 
docker compose up -d
```
(en algunos sistemas es: `docker-compose up -d` )

### Mongo :

Cambiar los datos de conexion (usuario, contraseña, puerto) en la linea 1 del archivo: [.env](.env) 

```bash 
npm install
npm start
```

## Documentacion de Endpoints

Endpoint: /team
Método: GET
Descripción: Obtiene la lista del equipo titular, dependiendo de los 3 ultimos entrenamientos.
Respuesta Exitosa: Lista equipo titular.
Ejemplo respuesta: 
```{
  "players": [
    {
      "id": 6,
      "name": "player 6",
      "score": 366
    },
    {
      "id": 3,
      "name": "player 3",
      "score": 342
    },
    {
      "id": 4,
      "name": "player 4",
      "score": 275.1
    },
    {
      "id": 2,
      "name": "player 2",
      "score": 271.5
    },
    {
      "id": 9,
      "name": "player 9",
      "score": 250.26
    }
  ]
}
```

Endpoint: /training
Método: POST
Descripción: Inserta un registro del entrenamiento con el score de cada jugador.
Parámetros:
  - request body :
  ```
  {
    "players": [
        {
            "id": 1,
            "name": "player 1",
            "stats": {
                "power": 300,
                "speed": {
                    "distance": "30",
                    "time": "5"
                },
                "passes": "20"
            }
        },
    ]
  } 
   ```
 
Respuesta Exitosa: JSON vacio, HTTP status 200.








