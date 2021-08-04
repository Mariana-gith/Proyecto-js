

// Id de cada compras
var compraId = 0;

// elegir productos
const comprar =(nomb)=>{
    
    var carroArray = carroArray = JSON.parse( localStorage.getItem('lista de compras'))
    if(carroArray == null || carroArray == undefined){
        carroArray = []
    } else {
        compraId = carroArray[ carroArray.length - 1 ].id + 1 //identifica la ultima posicion para agregar mas 
    }

    let productoElegido = bd.find((p)=> (p.id === nomb ))
    let nuevaCompra = new Compra (productoElegido, compraId++)
    carroArray.push(nuevaCompra)
    $("#msjCompra").html("compraste")
    
    localStorage.setItem('lista de compras' , JSON.stringify(carroArray))
}




 


   
    
  
    
     


