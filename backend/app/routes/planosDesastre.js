// var auth = require('../../config/auth').auth;

module.exports = function(app){   
    
    var controller = app.controllers.planosDesastre;

    app.get('/popPlanosDesastre', controller.pop);            
}