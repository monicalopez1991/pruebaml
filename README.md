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








