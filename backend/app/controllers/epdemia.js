module.exports = function(app){
    var Epdemia = app.models.epdemia;

    var json = [{nome:"epdemia1"},{nome:"epdemia2"},{nome:"epdemia3"}];

    var controller = {
        pop: function(req,res){
            Epdemia.create(json);  
            
            res.send({}); 
        } 
    }

    return controller;
}