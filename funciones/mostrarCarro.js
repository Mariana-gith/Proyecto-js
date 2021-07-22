

 

const mostrarCompra =()=> {
  
    let comprados= "";
    let carroArray = JSON.parse( localStorage.getItem('lista de compras'))
    if (carroArray == undefined){
        $('#carro').html('<p>No se ingresaron compras<p/>')
    }else{
        carroArray.forEach(compra => {comprados+=
                `<table class="table table-light">
                    <thead>
                    <tr>           
                        <th scope="col">${compra.nombre}</th>
                        <th scope="col">${compra.precio}</th>
                        <th scope="col">${compra.tipo}</th>
                    </tr>
                    </thead>
                </table>
                <div class="d-grid gap-2 mt-3 ">

                </div>`        
        });
    }
    $('#carro').html(comprados)
}


const irAlatienda = ()=> {
    let mensaje = document.getElementById('mensajeValidacion')
    mensaje.className= "text-success"
    mensaje.innerHTML= 'Procesando tu compra ...'
    setTimeout (()=>{
      window.location= './carrito.html';
  },1000)
   }