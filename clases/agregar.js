class Agregar {
    agregarCompra(compras){
       const listaCompras = document.getElementById('listaCompras');
       const nuevoElemento = document.createElement('div');
       nuevoElemento.innerHTML =
       `<div class="card text-center mt-5">
           <div class="card-body d-flex justify-content-around">
               <strong> Producto ${compras.nombre}</strong>
               <strong> Cantidad de cuotas ${compras.forma} </strong>
               <strong> comentario ${compras.comen} </strong>
           </div>
       <div>`

       listaCompras.appendChild(nuevoElemento)
   };
   reiniciarFormulario(){
    document.getElementById('formularioCompras').reset()
   };
}


