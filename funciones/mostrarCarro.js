

 var carrito=$('#carro  tbody')

 //funcion que nos permite visualizar las compras

const mostrarCompra =()=> {
    let comprados= "";
    let carroArray = JSON.parse( localStorage.getItem('lista de compras'))
    if (carroArray == undefined){
        carrito.html('<p>No se ingresaron compras<p/>') 
       // alert('No se ingresaron Pedidos')
       
    }else{
        carroArray.forEach(compra => {comprados+=
                `<table class="table table-light card">
                    <thead>
                    <tr id=comprado >           
                        <td scope="col" >${compra.nombre}</td>
                        <td scope="col">${compra.precio}</td>
                        <td scope="col">${compra.tipo}</td>
                        <td scope="col"><button  onclick="eliminarProd(${compra.id})">X</button></td>
                    </tr>
                    </thead>
                </table>
                <div class="d-grid gap-2 mt-3 ">

                </div>`        
        });

       carrito.hide()
       carrito.slideDown(2000)
       carrito.html(comprados)
   
     //Funcion que nos permite eliminar productos no deseados 
        eliminarProd =(elem)=>{
                    $("#comprado").remove(); //html
                    
                    let productoEliminado = carroArray.find((p)=> (p.id ===elem))
                    if (true){
                        console.log(productoEliminado)   //localStorage
                    }
             
                }
        }
    }
    
   


const irAlatienda = ()=> {
    let mensaje = document.getElementById('mensajeValidacion')
    mensaje.className= "text-success"
    mensaje.innerHTML= 'Procesando tu compra ...'
    setTimeout (()=>{
      window.location= './carrito.html';
  },1000)
   }



