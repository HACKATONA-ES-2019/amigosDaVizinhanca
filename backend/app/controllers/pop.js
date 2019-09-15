var login = require('../../config/auth').login;
const csv = require('csv-parser');
const fs = require('fs');

module.exports = function(app){
    var DadosTipo0 = app.models.dadosTipo0;
    var DadosTipo1 = app.models.dadosTipo1;

    var controller = {         
        popDadosTipo0: function(req,res){     
            fs.createReadStream('./dadosTipo0.csv')
                .pipe(csv())
                .on('data', (row) => {
                // console.log(row)
                DadosTipo0.create(row);
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