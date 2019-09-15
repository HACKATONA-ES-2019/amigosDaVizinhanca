var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({                 
        itens: [String]
    });

    return mongoose.model('PlanosDesastre', schema, 'planosDesastre');
}