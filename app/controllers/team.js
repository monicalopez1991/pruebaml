const service = require("../service/team")


exports.getData = async (req, res) => {
    docs = await service.getData()
    
    res.send(docs)
    
    
    
}


  
