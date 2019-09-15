var login = require('../../config/auth').login;
const csv = require('csv-parser');
const fs = require('fs');

// var brain = require(`brain.js`);
// var net = new brain.NeuralNetwork();

// const TreinamentoNeural = require('../../config/treinamentoNeural');

module.exports = function(app){
    var DadosTipo0 = app.models.dadosTipo0;
    var DadosTipo1 = app.models.dadosTipo1;

    
    var controller = {  
        prob: function(req,res){                 

        const output = app.get('NeuralNet').run([203202,23929394,req.params.mes]);
                
        const stats = console.log(`Prob: ${output}`);

        res.send({output}); 
        },        
        popDadosTipo0: function(req,res){     
            fs.createReadStream('./dadosTipo0.csv')
                .pipe(csv())
                .on('data', (row) => {
                console.log(row)
                // DadosTipo0.create(row);
            })
            .on('end', () => {
                console.log('CSV file successfully processed');                
            });    
            
            res.send({}); 
        },   
        popDadosTipo1: function(req,res){     
            fs.createReadStream('./dadosTipo1.csv')
                .pipe(csv())
                .on('data', (row) => {
                console.log(row)
                // DadosTipo1.create(row);
            })
            .on('end', () => {
                console.log('CSV file successfully processed');                
            });    
            
            res.send({}); 
        },  
        // login: function(req, res){
        //     var name = req.body.name,
        //         password = req.body.password;

        //     login(name,password, function(result){
        //         if(result)
        //             res.json(result);
        //         else
        //             res.status('401').json({message:'Erro de autenticação'});
        //     });
        // }
    }

    return controller;
}