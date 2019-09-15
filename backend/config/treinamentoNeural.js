// var DadosTipo0 = app.models.dadosTipo0; 
// const DadosTipo0 = require('../app/models/dadosTipo0');

const csv = require('csv-parser');
const fs = require('fs');

class TreinamentoNeural {

    constructor(){}    
    
    treina(net) {
        // con

        let list = [];

        fs.createReadStream('./dadosTipo0.csv')
            .pipe(csv())
            .on('data', (row) => {
            list.push(row)
        })
        .on('end', () => {
            console.log('CSV file successfully processed');   

            var result = [];
            list.forEach( row => {
                result.push({
                    input: [Number(row.qtdInfectadas), parseInt(row.qtdHabitantes,10), parseInt(row.mes,10)],
                    output: [parseInt(row.flagEpidemia,10)]
                })
            });
           
            net.train(result);
        });    
     }
  }

  module.exports = TreinamentoNeural;