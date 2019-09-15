// var DadosTipo0 = app.models.dadosTipo0; 
// const DadosTipo0 = require('../app/models/dadosTipo0');

const csv = require('csv-parser');
const fs = require('fs');

class TreinamentoNeural {

    constructor(){}    


    


    treina(net) {
        // console.log(DadosTipo0());
        // DadosTipo0.find({},[],{}).exec(callback).then((dados) => {
            
        //     console.log(dados);
        // });

        let list = [];
        let list2 = [];

        fs.createReadStream('./dadosTipo0.csv')
            .pipe(csv())
            .on('data', (row) => {
            // console.log(row)
            list.push(row)
            // DadosTipo0.create(row);
        })
        .on('end', () => {
            // console.log(list[0].qtdInfectadas);
            console.log('CSV file successfully processed');   
            
            


            // list.push(row)
            // {input: [2,4000,1], output: [0] },





            
            // var data = [];
            // for(var i =0; i<list.length; i++)
            // {
            //     var list6 = [parseInt(list[i].qtdHabitantes, 10), parseInt(list[i].qtdInfectadas,10), 1];
            //     var input = list6;
            //     console.log(input);

            //     var output = 1;

            //     data.push({
            //         input : list6, 
            //         output:output
            //     })

            // }

            //  list.forEach(element=>{
            //      list2.push({input: [1,2, 1], output: [1] });
            //     })

            //     console.log(list2);

            net.train(data,{}
                
                
                
                // [
            //     //1 pessoas infectados
            //     //2 total populacao
            //     //3 mes
                
               
            //     // {input: [list[0].qtdInfectadas,900,1], output: [1] },
            //     {input: [2,4000,1], output: [0] },
            //     {input: [240,50000,1], output: [1] },
            //     {input: [2,60000,1], output: [0] },
            //     {input: [400,800,1], output: [1] },
            //     {input: [4000,8000,1], output: [1] },
            //     {input: [400,800,1], output: [1] },
            //     {input: [40049,800299,1], output: [1] },
            //     {input: [4003,80000,1], output: [1] },
            // ]
            
            );

        });    


        

        
     }
  }

  module.exports = TreinamentoNeural;