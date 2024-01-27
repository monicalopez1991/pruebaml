
const request = require('supertest');
const app = require('../../app');
const service = require('../service/team');
const db = require('../../config/db');

// Mock del módulo interno
jest.mock('../service/team', () => ({
  getData: jest.fn()

}));

jest.mock('../../config/db', () => ({
    connectToDatabase: jest.fn()
  }));


describe('Pruebas para la ruta GET /team', () => {
  test('Debería responder con los datos que retorna el servicio', async () => {
    // Configuramos el comportamiento del mock
    service.getData.mockResolvedValue({ datos: 'Datos mockeados' });

    const response = await request(app).get('/team');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ datos: 'Datos mockeados' });
  });


});

