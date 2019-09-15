module.exports = function(app){
    var Desastre = app.models.desastre;

    var json = [{nome:"desastre1"},{nome:"desastre2"},{nome:"desastre3"}];

    var controller = {
        pop: function(req,res){
            Desastre.create(json);  
            
            res.send({}); 
        } 
    }

    return controller;
}