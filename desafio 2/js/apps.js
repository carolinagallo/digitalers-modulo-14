let planes=[
    {
        nombre: "Plan 001",
        capital: 150000,
        plazo: 30,
        taza: 15
    },
    {
        nombre: "Plan 002",
        capital: 300000,
        plazo: 180,
        taza: 10
    },
    {
        nombre: "Plan 003",
        capital: 485000,
        plazo: 60,
        taza: 23
    }
    ]
    
    
    function calcularInteres(planes){
        let planInteres=[];
        for(let i=0; i<planes.length; i++){
            let actual= planes[i];
            var interes = (actual.capital * actual.plazo * actual.taza ) / 100;


            planInteres.push({
            nombre:actual.nombre,
            capital: actual.capital,
            plazo: actual.plazo+" dias",
            taza: actual.taza+"%",
            interes: interes,            
            });
        }
        return planInteres;    
        
        
    }
    console.log(calcularInteres(planes))
    