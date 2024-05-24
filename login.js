$(document).ready(function()
{
    $("#btnlogin").on("click", function(){
        usuario = $("#user").val()
        contrasena = $("#password").val()
        if(usuario == ""){
            alert("El usuario esta vacio")
        } else{
            //alert("Ahora deberia pasar algo")
            if(contrasena == ""){
                alert("La contraseña está vacía")
            } else{
                location = "answer.html"
            }
        }
    })
})