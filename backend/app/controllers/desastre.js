module.exports = function(app){
    var Desastre = app.models.desastre;

    var json = [{
        id_plano: '5d7da96dcf44ad11b47bf90c',
        nome:"desastre1",
        tipo:0
    },
    {
        id_plano: '5d7da96dcf44ad11b47bf90c',
        nome:"desastre2", 
        tipo:0
    },
    {
        id_plano: '5d7da96dcf44ad11b47bf90d',
        nome:"desastre3",
        tipo:1
    }];

    var controller = {
        pop: function(req,res){
            Desastre.create(json);  
            
            res.send({}); 
        },
        listarDesastres: function(req,res){
            Desastre.aggregate([
                {   
                   $lookup:
                   {
                       from: "planosDesastre",
                       localField: "id_plano",
                       foreignField: "_id",
                       as :"plano"                        
                   },
               },     
               {   $unwind:"$plano" },  
               
            ]).exec().then((desastres) => {
                console.log(desastres);
                //res.send({}); 
                res.send(desastres);
            });

            // Desastre.find({},[],{}).exec().then((desastres) => {
            //         res.send(desastres);
            // })


        }




           



    }

    return controller;
}