module.exports = function(app){
    var Desastre = app.models.desastre;

    var json = [{
        //Dengue
        id_plano: '5d7e0427332069300a9a5cc6',
        nome:"Dengue",
        tipo:0
    },
    {
        //Meningite
        id_plano: '5d7e0427332069300a9a5cc8',
        nome:"Meningite", 
        tipo:0
    },
    {
        //H1N1
        id_plano: '5d7e0427332069300a9a5cc7',
        nome:"H1N1",
        tipo:0
    },
    {
        //Incendio
        id_plano: '5d7e0427332069300a9a5cc9',
        nome:"Incendio  ",
        tipo:1
    },
    {
        //Enchente
        id_plano: '5d7e0427332069300a9a5cca',
        nome:"Enchente",
        tipo:1
    },
];

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
        }
    }
    return controller;
}