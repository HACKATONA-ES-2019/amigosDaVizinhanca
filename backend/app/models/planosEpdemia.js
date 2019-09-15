var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        id_epdemia: {
            type: mongoose.Schema.Types.ObjectId,            
        },         
        itens: [String]            
      
    });

    return mongoose.model('PlanosEpdemia', schema, 'planosEpdemia');
}