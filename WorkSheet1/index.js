/* //Ejercicio 1
const btn=document.querySelector("button");
btn.addEventListener("click", ()=>alert("Has pulsado el botón")); */

/* //Ejercicio 2
const body=document.querySelector("tr");
body.addEventListener("mousemove", e => console.log(e.offsetX+"  "+e.offsetY)); */

//Ejercicio 4 y 5
function cargarCanvas(){
    document.write("<h3>Shift: Azul,  Control: Rojo</h3>");
    document.write("Debes volver a pulsar la tecla para desactivar el color");
    document.write('<table width='+'"700px"'+"height="+'"700px"'+"style="+'"border: 1px solid black"'+'>');
    for(let i=0; i<30;i++){
        document.write('<tr width="100px">');
        for(let j=0; j<30;j++){
            document.write('<td id="width="100px" style="border: 1px solid black"></td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
    
    var shift, ctrl;
    var tds=document.querySelectorAll("td");
    tds.forEach(function(td){
        td.addEventListener("mousemove", function(){            
            window.addEventListener("keydown", function(e){
                if(e.getModifierState("Control")){
                    ctrl=true;
                    shift=false;
                    window.addEventListener("keyup", function(e){
                        ctrl=false;
                    });
                }
                if(e.shiftKey){
                    ctrl=false;
                    shift=true;
                    window.addEventListener("keyup", function(e){
                        shift=false;
                    });
                }
            });
            if(ctrl)
                td.style.cssText="background-color: red; border: 1px solid black;";
            else if(shift)
                    td.style.cssText="background-color: blue; border: 1px solid black;";
            //td.style.cssText="background-color: red; border: 1px solid black;";
        });
        
    });
};
window.addEventListener('load', cargarCanvas);

/* //Ejercicio 9 y 10
var imagenes=document.querySelectorAll("img");
imagenes.forEach(function(imagen){
    imagen.addEventListener("dragend", function(e){
        imagen.style.cssText="position: absolute; top: "+e.y+"; left: "+e.x+";";
    });
});
 */