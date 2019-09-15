// var auth = require('../../config/auth').auth;

module.exports = function(app){   
    
    var controller = app.controllers.planosEpdemia;

    app.get('/popPlanosEpdemia', controller.pop);            
}