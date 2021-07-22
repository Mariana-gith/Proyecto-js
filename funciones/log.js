

var usuario = 'usuario1';
var contrasena = "123456789";


const login =()=>{

     let usuarioLog = document.getElementById('nombreUsuario').value 
    let contrasenaLog = document.getElementById('contrasenia').value
    let mensaje = document.getElementById('mensajeValidacion')

    console.log(usuarioLog)
    console.log(contrasenaLog)

     if(usuarioLog== usuario && contrasenaLog == contrasena){
        


        mensaje.className= "text-success"
        mensaje.innerHTML=`Bienvenide ${usuario}`

        setTimeout (()=>{
            window.location= './pages/tienda.html';
        },2000)
    } else { mensaje.className= "text-danger"
    mensaje.innerHTML=`usuario o contraseña incorrecta`
}

}


