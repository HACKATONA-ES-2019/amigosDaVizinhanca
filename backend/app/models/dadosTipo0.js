var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        pais: {
            type: String,
        }, 
        uf: {
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
        ano: {
            type: Number,
        },
    });

    return mongoose.model('DadosTipo0', schema, 'dadosTipo0');
}


// var mongoose = require('mongoose');

// var schema = mongoose.Schema({
//     pais: {
//         type: String,
//     }, 
//     uf: {
//         type: String,
//     }, 
//     epdemia: {
//         type: String,
//     }, 
//     qtdInfectadas: {
//         type: Number,
//     }, 
//     qtdHabitantes: {
//         type: Number,
//     }, 
//     mes: {
//         type: Number,
//     },
//     ano: {
//         type: Number,
//     },
// });

// module.exports = mongoose.model('DadosTipo0', schema);

