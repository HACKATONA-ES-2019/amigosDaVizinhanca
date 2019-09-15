var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        id_plano: {
            type: mongoose.Schema.Types.ObjectId,            
        },
        nome: {
            type: String,
        },
        tipo: { //0 epdemia - 1 incendio - 2 inundação
            type: Number,
        },      
    });

    return mongoose.model('Desastre', schema, 'desastre');
}