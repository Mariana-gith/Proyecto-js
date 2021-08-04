

//Esta clase da oorigena nuestra base de datos


class Product {
    constructor(pId, pNombre, pTipo, pPrecio,pImg){
        this.id = pId;
        this.nombre=pNombre;
        this.tipo = pTipo
        this.precio= pPrecio;
        this.img=pImg
       
    }

}

let producto1= new Product(1000,'sabana','simple', 17000,URL= "../assets/OIP.jfif" )
let producto2= new Product(1001,'toallon','simple', 18000,URL= "../assets/OIP.jfif" )
let producto3= new Product(1002,'cubre cama','simple', 19000,URL= "../assets/OIP.jfif" )
let producto4= new Product(1003,'sabana','doble', 17100,URL= "../assets/OIP.jfif" )
let producto5= new Product(1004,'toallon','doble', 17200,URL= "../assets/OIP.jfif" )
let producto6= new Product(1005,'cubre cama','doble', 17300,URL= "../assets/OIP.jfif" )



var bd= [producto1,producto2,producto3,producto4,producto5,producto6]


var prodTOdos = localStorage.setItem('Lista de Productos', JSON.stringify(bd))




class Compra {
    constructor(pProducto, pCompraId){
        this.producto = pProducto
        this.id= pCompraId
    }

    
}


