var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        id_desastre: {
            type: mongoose.Schema.Types.ObjectId,            
        },         
        itens: [String]            
      
    });

    return mongoose.model('PlanosDesastre', schema, 'planosDesastre');
}