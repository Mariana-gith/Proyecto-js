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




var bd= [producto1,producto2,producto3,producto4]




    
