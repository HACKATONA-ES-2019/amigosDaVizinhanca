// var auth = require('../../config/auth').auth;

module.exports = function(app){   
    
    var controller = app.controllers.epdemia;

    app.get('/popEpdemia', controller.pop);            
}