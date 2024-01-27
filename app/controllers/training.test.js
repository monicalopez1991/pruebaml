
const request = require('supertest');
const app = require('../../app');
const service = require('../service/training');
const db = require('../../config/db');
const { postData } = require('./training');

// Mock del módulo interno
jest.mock('../service/training', () => ({
  postData: jest.fn()

}));

jest.mock('../../config/db', () => ({
    connectToDatabase: jest.fn()
  }));



  


describe('Pruebas para la ruta POST /training', () => {
  test('Debería enviar los datos que llegan en el body al servicio', async () => {
    const body = {"players":[{"id":1,"name":"player 1","stats":{"power":"300","speed":{"distance":"30","time":"5"},"passes":"20"}},{"id":2,"name":"player 2","stats":{"power":"400","speed":{"distance":"40","time":"4"},"passes":"15"}}]}
    const response = await request(app).post('/training').send(body);
    expect(response.status).toBe(200);
    expect(service.postData).toHaveBeenCalledWith(body)
   
  });

  test('Debería enviar los datos que llegan en el body al servicio', async () => {
    const body = {"players":[{"id":1,"name":"player 1","stats":{"power":"-300","speed":{"distance":"-30","time":"-5"},"passes":"-20"}},{"id":2,"name":"player 2","stats":{"power":"ll","speed":{"distance":"p","time":"u"},"passes":"v"}}]}
    const response = await request(app).post('/training').send(body);
    expect(response.status).toBe(400);
   
  });

  test('Debería responder con los datos que retorna el servicio', async () => {
    // Configuramos el comportamiento del mock
    service.postData.mockRejectedValue(new Error("Error")); 
    const response = await request(app).post('/training').send({});
    expect(response.status).toBe(500);
    expect(response.body).toEqual({"error": "Error al crear los datos."});
   
  });

  


});
