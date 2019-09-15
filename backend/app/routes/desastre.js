// var auth = require('../../config/auth').auth;

module.exports = function(app){   
    
    var controller = app.controllers.desastre;

    app.get('/popDesastre', controller.pop);  
    app.get('/listaDesastres', controller.listarDesastres);  
              
}