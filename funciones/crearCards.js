const creaCards =()=> {
    let todosProductos = "";
    bd.forEach((p) =>{ todosProductos +=
        `<div id=${p.id} class="card d-inline-flex p-2" style="width: 18rem;">
            <img  class="card-img-top" src="${p.img}" alt="${p.nombre}">
            <div class="card-body">
                <h5 class="card-title"> ${p.nombre}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${p.tipo}</li>
                <li class="list-group-item">${p.precio}</li>
                <li class="list-group-item">stock ...</li>
            </ul>
           
            <div class = "card-body">
                <button onclick ="comprar(${p.id})" type="button" class="btn btn-success">comprar</button>
            </div>
            
        </div>`})

   

    $("#carProducto").html(todosProductos)
}
