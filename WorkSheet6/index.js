window.onload=main;

function main(){
  var usuario, bgcolor, pcolor, letra;
  if(document.cookie==""){
      document.getElementById("enviar").addEventListener("click", function(){
          if(document.getElementById("user").value==""){
              alert("Introduce un nombre de usuario");
          }else{
              usuario=document.getElementById("user").value;
              bgcolor=document.getElementById("bgcolor").value;
              pcolor=document.getElementById("pcolor").value;
              letra=document.getElementById("letra").value;
              setCookie("usuario", usuario, 7);
              setCookie("bgcolor", bgcolor, 7);
              setCookie("pcolor", pcolor, 7);
              setCookie("letra", letra, 7);
              window.location.reload();
          }
      })
  }else{
      document.getElementById("cerrar").style.display="initial";
      document.getElementById("bienvenida").style.display="initial";
      document.getElementById("usuario").style.display="none";
      document.body.style.backgroundColor=getCookie("bgcolor");
      document.querySelectorAll("p").forEach((p)=>p.style.backgroundColor=getCookie("pcolor"));
      document.body.style.fontSize=getCookie("letra");
      document.querySelector("h1").innerHTML=getCookie("usuario")+", bienvenido al perfil de usuario, solo puede cerrar sesión :D!";
      document.getElementById("cerrar").addEventListener("click", function(){
          deleteCookie("usuario");
          deleteCookie("bgcolor");
          deleteCookie("pcolor");
          deleteCookie("letra");
          window.location.reload();
      })

  }
}







//Funciones setCookie deleteCookie y getCookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };
  function deleteCookie(name) { setCookie(name, '', -1); }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }