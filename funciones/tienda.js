



class Producto {
    constructor( pNombre,Ttipo,Pprecio){
    this.nombre=pNombre;
    this.tipo = Ttipo
    this.precio= Pprecio;
    }
}


let producto1= new Producto('sabana','simple', 17000 )
let producto2= new Producto('toallon','simple', 18000 )
let producto3= new Producto('cubre cama','simple', 19000 )
let producto4= new Producto('sabana','doble', 17100 )
let producto5= new Producto('toallon','doble', 17200 )
let producto6= new Producto('cubre cama','doble', 17300 )
let producto7= new Producto('sabana','king', 17400 )
let producto8= new Producto('toallon','king', 17500 )
let producto9= new Producto('cubre cama','king', 17600 )


let dB = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9]

var carritoArray = [];


agregarProducto=(productoGenerico)=>{
      const cardContenido = document.getElementById('listaSeleccion1')    
      let  agregarComprado = document.createElement ('div')
      agregarComprado.innerHTML=
      `<table class="table table-light">
      <thead>
        <tr>           
          <th scope="col">${productoGenerico.nombre}</th>
          <th scope="col">${productoGenerico.precio}</th>
          <th scope="col">${productoGenerico.tipo}</th>
        </tr>
      </thead>
    </table>`

      cardContenido.appendChild(agregarComprado)  


  }



const procesarPedido = ()=>{
  let nombreInput = document.getElementById('producto').value 
  let tipoInput = document.getElementById('tipo').value
  console.log(nombreInput)
  console.log(tipoInput)
  let productoElegido = dB.find((p)=> (p.nombre==nombreInput && p.tipo==tipoInput))

  carritoArray.push(productoElegido)
  
  localStorage.setItem('Lista de compras', JSON.stringify(carritoArray))
  
  agregarProducto(productoElegido)
  

  console.log(dB)
  console.log(document.getElementById('producto'))
  console.log(typeof(nombreInput))

}



const mostrarCarro =()=>{
  let contenido = document.getElementById('carro')
  let mostrarCompra = document.createElement('div')
  let carritoArray = JSON.parse( localStorage.getItem('Lista de compras'))
  
  if( carritoArray ==undefined){    
    contenido.innerHTML = "Por favor ingrese una compra"     
  } else {
    contenido.innerHTML = "";
  }
    carritoArray.forEach(com =>{
    mostrarCompra.innerHTML +=
    `<table class="table table-light">
    <thead>
      <tr>           
        <th scope="col">${com.nombre}</th>
        <th scope="col">${com.precio}</th>
        <th scope="col">${com.tipo}</th>
      </tr>
    </thead>
  </table>`

  })

  contenido.appendChild(mostrarCompra)
}


 const irAlatienda = ()=> {
  let mensaje = document.getElementById('mensajeValidacion')
  mensaje.className= "text-success"
  mensaje.innerHTML= 'Procesando tu compra ...'
  setTimeout (()=>{
    window.location= '../pages/carrito.html';
},1000)
 }