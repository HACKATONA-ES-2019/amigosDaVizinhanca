module.exports = function(app){
    var PlanosEpdemia = app.models.planosEpdemia;

    var json = [{
            id_epdemia:"5d7d7ae018ae5d3af5c4fec7", 
            itens: ["item1","item2","item3","item4"]
        },
        { 
            id_epdemia:"5d7d7ae018ae5d3af5c4fec8", 
            itens: ['item1','item2','item3','item4']
        }];

    var controller = {
        pop: function(req,res){
            PlanosEpdemia.create(json);  
            
            res.send({}); 
        } 
    }

    return controller;
}