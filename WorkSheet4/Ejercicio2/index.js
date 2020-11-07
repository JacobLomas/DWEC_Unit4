window.addEventListener("load", main);
var fuente, alineacion;
function main(){
    fuente=document.getElementById("fuente");
    fuente.addEventListener("change", function(e){
        document.querySelectorAll("p").forEach(function(p){
            p.style.fontSize=e.target.value;
        })
    })

    alineacion=document.getElementById("alineacion");
    alineacion.addEventListener("change", function(e){
        document.querySelectorAll("p").forEach(function(p){
            p.style.textAlign=e.target.value;
        })
    })
}