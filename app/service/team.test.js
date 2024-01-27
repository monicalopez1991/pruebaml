const model = require('../models/training');
const service = require('../service/team');
const mongoData = require('./testData.json');
const responseData = require('./testResponse.json');
const mongoData2Training = require ('./testData2Training.json')
// Mock del módulo interno
jest.mock('../models/training', () => ({
    find : jest.fn()
  
  }));

describe('Pruebas para el servicio de team', () => {
    test('averiguar que fecha inicio la semana pasando un viernes', () => {
        let date = service.getDateStartWeek(new Date("2024-01-26"))
        expect(date.toISOString()).toBe(new Date("2024-01-22").toISOString());
      });

      test('averiguar que fecha inicio la semana pasando un domingo', () => {
        let date = service.getDateStartWeek(new Date("2024-01-21"))
        expect(date.toISOString()).toBe(new Date("2024-01-15").toISOString());
      });
      test('averiguar que fecha inicio la semana pasando un lunes', () => {
        let date = service.getDateStartWeek(new Date("2024-01-22"))
        expect(date.toISOString()).toBe(new Date("2024-01-22").toISOString());
      });

      

});

describe('Pruebas para el modelo get', () => {
    test('Debería responder con los datos que retorna el servicio', async () => {
      // Configuramos el comportamiento del mock
      model.find.mockResolvedValue(mongoData); 
      const data = await service.getData()
      expect(data).toEqual(responseData);
     
    });

    test('Debería responder con los datos que retorna el servicio', async () => {
        // Configuramos el comportamiento del mock
        model.find.mockResolvedValue(mongoData2Training); 
        const data = await service.getData()
        expect(data).toEqual("No hay suficiente informacion");
       
      });
  
})

