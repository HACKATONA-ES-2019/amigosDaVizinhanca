var login = require('../../config/auth').login;
const csv = require('csv-parser');
const fs = require('fs');

module.exports = function(app){
    var DadosEpdemia = app.models.dadosEpdemia;
    var DadosDesastres = app.models.dadosDesastres;

    var controller = {
        index: function(req,res){
            res.send({
                teste:1
            });            
        },   
        popDadosEpdemia: function(req,res){     
            fs.createReadStream('./arquivo.csv')
                .pipe(csv())
                .on('data', (row) => {
                console.log(row)
                //DadosEpdemia.create(row);
            })
            .on('end', () => {
                console.log('CSV file successfully processed');                
            });    
            
            res.send({}); 
        },   
        popDadosDesastre: function(req,res){     
            fs.createReadStream('./arquivo2.csv')
                .pipe(csv())
                .on('data', (row) => {
                console.log(row)
                //DadosDesastre.create(row);
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