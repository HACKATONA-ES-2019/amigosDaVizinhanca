var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        regiao: {
            type: String,
        }, 
        epdemia: {
            type: String,
        }, 
        qtdInfectadas: {
            type: Number,
        }, 
        qtdHabitantes: {
            type: Number,
        }, 
        mes: {
            type: Number,
        },
    });

    return mongoose.model('DadosEpdemia', schema, 'dadosEpdemia');
}