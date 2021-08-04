
var tablaCarrito=$('#carro  tbody')

//funcion que nos permite visualizar las compras

const mostrarCompra = () => {
    let comprados= "";
    var carroArray = JSON.parse( localStorage.getItem('lista de compras'))
    if (carroArray == undefined) {
        tablaCarrito.html('<p>No se ingresaron compras<p/>') 
    }else {
        carroArray.forEach( compra => { 
            comprados+=
                `<table class="table table-light card">
                    <thead>
                    <tr id=comprado >           
                        <td scope="col">${compra.nombre}</td>
                        <td scope="col">${compra.precio}</td>
                        <td scope="col">${compra.tipo}</td>
                        <td scope="col"><button  onclick="eliminarProd(${compra.id})" >X</button></td>
                    </tr>
                    </thead>
                </table>
                <div class="d-grid gap-2 mt-3 ">
                </div>`
        });
    }
    tablaCarrito.html(comprados)
    tablaCarrito.hide()
    tablaCarrito.slideDown(2000)   
    

    //Funcion que nos permite eliminar productos no deseados 
    eliminarProd = (elem) => {
        carroArray= carroArray.filter((p)=> (p.id !==elem))
        localStorage.setItem('lista de compras', JSON.stringify(carroArray)) //sobreescribe en localstorage los productos eliminados
        //alert('eliminando Compra ...')
        $("#comprado").append('Eliminando Compra...').fadeOut(2000)
        setTimeout (() => {
            window.location = './carrito.html';
          },1000)
}
 
}
const irAlatienda = () => {
    let mensaje = document.getElementById('mensajeValidacion')
    mensaje.className = "text-success"
    mensaje.innerHTML = 'Procesando tu compra ...'
    setTimeout (() => {
      window.location = './carrito.html';
    },1000)
}

const volverAlatienda = () => {
    $('#mensajeVolver').html( 'volviendo a la Teinda ...')
    setTimeout (() => {
      window.location = './tienda.html';
    },1000)
    
}