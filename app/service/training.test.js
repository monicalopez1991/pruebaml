const service = require('../service/training');
const model = require('../models/training');
const paramsModel = require('../models/params');

// Mock del módulo interno
jest.mock('../models/training', () => ({
    create : jest.fn()
  
  }));

jest.mock('../models/params', () => ({
    findOne : jest.fn()
  
  }));


describe('Pruebas unitarias del servicio de training', () => {
    test('Debería enviar los datos que llegan en el body al servicio', async () => {
      const body = {"players":[{"id":1,"name":"player 1","stats":{"power":"300","speed":{"distance":"30","time":"5"},"passes":"20"}}]}
      const bodyConverted =  {"players":[{"id":1,"name":"player 1","score":71.8}], training_date: new Date().toDateString()}
      paramsModel.findOne.mockResolvedValue({
        "numberOfPlayers": 8,
        "powerPercentage": 20,
        "speedPercentage": 30,
        "passesPercentage": 50,
        "id": 1  
      }); 
      await service.postData(body)
      expect(model.create).toHaveBeenCalledWith(bodyConverted)
     
    });
  
  
  });
  

 