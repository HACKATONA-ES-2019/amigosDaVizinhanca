var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        regiao: {
            type: String,
        }, 
        desastre: {
            type: String,
        }, 
        qtdCasos: {
            type: Number,
        }, 
        mes: {
            type: Number,
        },
        ano: {
            type: Number,
        },
    });

    return mongoose.model('dadosTipo1', schema, 'dadosTipo1');
}