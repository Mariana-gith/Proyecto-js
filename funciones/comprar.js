
var carritoArray = [];


const comprar =(nomb)=>{

    let prodLista = JSON.parse(localStorage.getItem('productos'))
    let productoElegido = prodLista.find((p)=> (p.id === nomb ))

    carritoArray.push(productoElegido)
    alert(`compraste`)
    

    localStorage.setItem('lista de compras' , JSON.stringify(carritoArray))
}


