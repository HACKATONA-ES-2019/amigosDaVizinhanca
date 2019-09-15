var express = require('express'); 
var bodyParser = require('body-parser');
var load = require('express-load');
var cors = require('cors');

var auth = require('./auth').auth;

var brain = require(`brain.js`);
var net = new brain.NeuralNetwork();

// const PORT = process.env.PORT;
const PORT = 3001;

module.exports = function(){
    var app = express();

    app.set('port', PORT);
    app.use(bodyParser.json());
    app.use(cors());


    net.train([
        {input: [300,900,1], output: [1] },
        {input: [2,4000,1], output: [0] },
        {input: [240,50000,1], output: [1] },
        {input: [2,60000,1], output: [0] },
        {input: [400,800,1], output: [1] },
        {input: [4000,8000,1], output: [1] },
        {input: [400,800,1], output: [1] },
        {input: [40049,800299,1], output: [1] },
        {input: [4003,80000,1], output: [1] },
    ]);
    
    app.set('Neural', net);
    
    app.use(express.static('./app/views'));  
    app.use(auth.initialize()); 

    load('models',{cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}


// const brain = require(`brain.js`);


// const net = new brain.NeuralNetwork();

// net.train([
//     {input: [300,900,1], output: [1] },
//     {input: [2,4000,1], output: [0] },
//     {input: [240,50000,1], output: [1] },
//     {input: [2,60000,1], output: [0] },
//     {input: [400,800,1], output: [1] },
//     {input: [4000,8000,1], output: [1] },
//     {input: [400,800,1], output: [1] },
//      {input: [40049,800299,1], output: [1] },
//      {input: [4003,80000,1], output: [1] },
// ]);



// const output = net.run([203202,23929394,1]);
// const stats = console.log(`Prob: ${output}`);