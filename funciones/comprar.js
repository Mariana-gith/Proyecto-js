
var carritoArray = [];


const comprar =(nomb)=>{

    let productoElegido = bd.find((p)=> (p.id === nomb ))

    carritoArray.push(productoElegido)
    alert(`compraste`)

    localStorage.setItem('lista de compras' , JSON.stringify(carritoArray))
}


