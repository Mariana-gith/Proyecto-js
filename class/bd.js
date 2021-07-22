let producto1= new Product(1000,'sabana','simple', 17000,URL= "../assets/OIP.jfif" )
let producto2= new Product(1001,'toallon','simple', 18000,URL= "../assets/OIP.jfif" )
let producto3= new Product(1002,'cubre cama','simple', 19000,URL= "../assets/OIP.jfif" )
let producto4= new Product(1003,'sabana','doble', 17100,URL= "../assets/OIP.jfif" )
let producto5= new Product(1004,'toallon','doble', 17200,URL= "../assets/OIP.jfif" )
let producto6= new Product(1005,'cubre cama','doble', 17300,URL= "../assets/OIP.jfif" )
let producto7= new Product(1006,'sabana','king', 17400,URL= "../assets/OIP.jfif" )
let producto8= new Product(1008,'toallon','king', 17500, URL= "../assets/OIP.jfif")
let producto9= new Product(1009,'cubre cama','king', 17600,URL= "../assets/OIP.jfif");

var bd= [producto1,producto2,producto3,producto4,producto5,producto6,producto6,producto7,producto8,producto9]


var prodTOdos = localStorage.setItem('Lista de Productos', JSON.stringify(bd))

