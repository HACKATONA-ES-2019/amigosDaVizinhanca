// var auth = require('../../config/auth').auth;

module.exports = function(app){   
    
    var controller = app.controllers.pop;

    //app.post('/login',controller.login);    
    app.get('/prob/:mes',controller.prob);
    app.get('/popDadosTipo0',controller.popDadosTipo0);
    app.get('/popDadosTipo1',controller.popDadosTipo1);
}