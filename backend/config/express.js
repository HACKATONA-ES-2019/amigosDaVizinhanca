var express = require('express'); 
var bodyParser = require('body-parser');
var load = require('express-load');
var cors = require('cors');

var auth = require('./auth').auth;

const TreinamentoNeural = require('./treinamentoNeural');

var brain = require(`brain.js`);
var net = new brain.NeuralNetwork();

// const PORT = process.env.PORT;
const PORT = 3001;

module.exports = function(){
    var app = express();

    app.set('port', PORT);
    app.use(bodyParser.json());
    app.use(cors());
    
    app.set('NeuralNet', net);
    var n = new TreinamentoNeural();  
    n.treina(net);
    
    app.use(express.static('./app/views'));  
    app.use(auth.initialize()); 

    load('models',{cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}