module.exports = function(app){
    var PlanosDesastre = app.models.planosDesastre;

    var json = [{
            id_desastre:"5d7d874d01e1ed7e39a3b70c", 
            itens: ["item1","item2","item3","item4"]
        },
        { 
            id_desastre:"5d7d874d01e1ed7e39a3b70d", 
            itens: ['item1','item2','item3','item4']
        }];

    var controller = {
        pop: function(req,res){
            PlanosDesastre.create(json);  
            
            res.send({}); 
        } 
    }

    return controller;
}