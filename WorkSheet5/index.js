window.addEventListener("load", main);
function main(){
    validarNombreUsuario();    
    
};


function validarNombreUsuario(){
    var nombreUsuario=document.getElementById("nombreUsuario");
    var val=new RegExp("^[a-zA-Z!#$%&/()=\s]+$");
    nombreUsuario.addEventListener("keyup",function(e){
        if(val.test(nombreUsuario.value) ){
            e.target.style.backgroundColor="green";
            e.target.style.opacity="50%"
        }else{
            e.target.style.backgroundColor="red";
            e.target.style.opacity="50%"
        }
    })
}