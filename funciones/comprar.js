

// variable global para todas las compras

var carritoArray = [];

// elegir productos
const comprar =(nomb)=>{
   
    let productoElegido = bd.find((p)=> (p.id === nomb ))

    carritoArray.push(productoElegido)
    $("#msjCompra").html("compraste").fadeIn(3000).hide(3000)
    
    console.log()

    localStorage.setItem('lista de compras' , JSON.stringify(carritoArray))
}



 


   
    
  
    
     


