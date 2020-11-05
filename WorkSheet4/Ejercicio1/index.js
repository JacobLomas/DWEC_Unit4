window.addEventListener("load", main);
var body, aside, section, h3, ases, pMarco;
function main(){
    //Estilo body
    body=document.body;
    body.style.backgroundColor='lightgoldenrodyellow';
    body.style.fontFamily='Verdana';
    //Estilo aside
    aside=document.querySelector("aside");
    aside.style.left="0%";
    aside.style.width="12%";
    aside.style.height="100%";
    aside.style.backgroundColor="cornflowerblue";
    //Estilo section
    section=document.querySelector("section");
    section.style.position="absolute";
    section.style.top="0%";
    section.style.left="15%";
    //Estilo h3
    h3=document.querySelector("h3")
    h3.style.backgroundColor="lightblue";
    //Estilo y eventos <a>
    ases=document.querySelectorAll("a");
    ases.forEach(function(a){
        a.style.textDecoration="none";
        a.style.fontWeight="bold";
        a.style.fontSize="1.3rem";
        a.style.color="blue";
        a.addEventListener("mousemove", function(){
            a.style.cursor="pointer";
        });

    });

    document.querySelectorAll("a")[0].addEventListener("click", function(){
        main();
    });
    document.querySelectorAll("a")[1].addEventListener("click", function(){
        sinEstilo();
    });


    //Estilo párrafo con marco;
    pMarco=document.getElementById("pMarco");
    pMarco.style.marginTop="15px";
    pMarco.style.padding="10px";
    pMarco.style.border="1px solid black";
    pMarco.style.backgroundColor="yellow";

    document.getElementById("ocultar").style.display="inherit";
}

//Sin estilo
function sinEstilo(){
    body.style="";
    aside.style="";
    section.style="";
    h3.style="";
    ases.forEach(function(a){
        a.style="";
        a.style.textDecoration='underline';
        a.style.color="blue";
    })
    pMarco.style="";
    document.getElementById("ocultar").style.display="none";
}
