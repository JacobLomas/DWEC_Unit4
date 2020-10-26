/* //Ejercicio 1
const btn=document.querySelector("button");
btn.addEventListener("click", ()=>alert("Has pulsado el botón")); */

/* //Ejercicio 2
const body=document.querySelector("tr");
body.addEventListener("mousemove", e => console.log(e.offsetX+"  "+e.offsetY)); */

/* //Ejercicio 4 y 5
function cargarCanvas(){
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
    var td=document.querySelectorAll("td");
    td.forEach(function(td){
        td.addEventListener("mousemove", function(){            
            window.addEventListener("keydown", function(e){
                if(e.ctrlKey){
                    ctrl=true;
                    shift=false;
                }
                if(e.shiftKey){
                    shift=true;
                    ctrl=false
                }
                console.log(e.code);
            });
            if(ctrl)
                td.style.cssText="background-color: red; border: 1px solid black;";
            else if(shift)
                    td.style.cssText="background-color: blue; border: 1px solid black;";
            //td.style.cssText="background-color: red; border: 1px solid black;";
        });
        
    });
};
window.addEventListener('load', cargarCanvas); */

//Ejercicio 9 y 10
var imagenes=document.querySelectorAll("img");
imagenes.forEach(function(imagen){
    imagen.addEventListener("dragend", function(e){
        imagen.style.cssText="position: absolute; top: "+e.y+"; left: "+e.x+";";
    });
});