/* //Ejercicio 1
const btn=document.getElementById("alert");
btn.addEventListener("click", ()=>alert("Has pulsado el botón")); */

/* //Ejercicio 2
const body=document.querySelector("td");
body.addEventListener("mousemove", e => console.log(e.offsetX+"  "+e.offsetY)); */

/* //Ejercicio 4 y 5 Preguntar a Jose ¿por qué peta a los segundos?
function main(){
    //Creacion elementos html
    tabla=("<h3>Shift: Azul,  Control: Rojo, Alt Graph: Borrar</h3>");
    tabla+=('<table width='+'"700px"'+"height="+'"700px"'+"style="+'"border: 1px solid black"'+'>');
    for(let i=0; i<30;i++){
        tabla+=('<tr width="100px">');
        for(let j=0; j<30;j++){
            tabla+=('<td id="width="100px" style="border: 1px solid black"></td>');
        }
        tabla+=('</tr>');
    }
    tabla+=('</table><br>');
    tabla+=("<button>Borrar Canvas</button>");
    document.getElementById("tabla").innerHTML=tabla;

    //Eventos 
    document.querySelector("button").addEventListener("click", main);
    var shiftBlue, ctrlRed, altBorrar;
    var tds=document.querySelectorAll("td");
    tds.forEach(function(td){
        td.addEventListener("mousemove", function(e){    
            window.addEventListener("keydown", function(e){//Estos eventos son inecesarios, mousemove tambien detecta la tecla pulsada :D 
                if(e.ctrlKey){
                    ctrlRed=true;
                    shiftBlue=false;
                    altBorrar=false;
                    window.addEventListener("keyup", function(e){
                        ctrlRed=false;
                    });
                };
                if(e.shiftKey){
                    ctrlRed=false;
                    shiftBlue=true;
                    altBorrar=false;
                    window.addEventListener("keyup", function(e){
                        shiftBlue=false;
                    });
                };
                if(e.getModifierState("AltGraph")){
                    altBorrar=true;
                    ctrlRed=false;
                    shiftBlue=false;
                    window.addEventListener("keyup", function(e){
                        altBorrar=false;
                    });
                }
            });
            if(ctrlRed)
                td.style.cssText="background-color: red; border: 1px solid black;";
            else if(shiftBlue)
                    td.style.cssText="background-color: blue; border: 1px solid black;";
                else if(altBorrar)
                    td.style.cssText="background-color: white; border: 1px solid black;";

        });
        
    });
}; */


//Ejercicio 9 y 10
var imagenes=document.querySelectorAll("img");
imagenes.forEach(function(imagen){
    var top, left;
    top=imagen.style.top;
    left=imagen.style.left;
    imagen.addEventListener("dragend", function(e){

        imagen.style.cssText="position: absolute; top: "+(e.y-top)+"; left: "+(e.x-left)+";";
    });
});
