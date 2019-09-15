// var DadosTipo0 = app.models.dadosTipo0;

class TreinamentoNeural {

    constructor(){}

    treina(net) {
        net.train([
            //1 pessoas infectados
            //2 total populacao
            //3 mes


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
     }
  }

  module.exports = TreinamentoNeural;