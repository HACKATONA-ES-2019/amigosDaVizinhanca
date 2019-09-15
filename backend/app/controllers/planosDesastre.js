module.exports = function(app){
    var PlanosDesastre = app.models.planosDesastre;

    var json = [{    
            //Dengue        
            itens: ["Tendas","Poltronas para Hidratação","Cadeiras","Medicamentos", "Avaliar liberação de recursos financeiros","Voluntarios"]
        },
        { 
            //Meningite
            itens: ["Voluntários","Avaliar disponibilidade  de recursos financeiros","Medicamentos","Camas","Soro"]
        },
        { 
            //H1N1
            itens: ["Água","Recursos financeiros","Medicamentos","Suprimentos","Alimentos não perecíveis","Médicos voluntários", "Roupas isolantes"]
        },
        { 
            //Incendio
            itens: ["Açao rápida dos bombeiros","Disponibilidade de caminhões","Verificar disponibilidade em hospitais","Recursos financeiros","Deslocamento dos veículos","Pizza", "Hackatona"]
        },
        { 
            //Enchente
            itens: ["Verificar disponibilidade em hospitais","Acompanhar probabilidade de chuva","Umidade do ar","Vagas em Hospitais","Voluntarios","Recorrência"]
        }        
    
    ];

    var controller = {
        pop: function(req,res){
            PlanosDesastre.create(json);  
            res.send({}); 
        } 
    }

    return controller;
}