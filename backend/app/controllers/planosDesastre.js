module.exports = function(app){
    var PlanosDesastre = app.models.planosDesastre;

    var json = [{            
            itens: ["plano1","plano2","plano3","plano4"]
        },
        { 
            itens: ['plano5','plano6','plano7','plano8']
        }];

    var controller = {
        pop: function(req,res){
            PlanosDesastre.create(json);  
            res.send({}); 
        } 
    }

    return controller;
}