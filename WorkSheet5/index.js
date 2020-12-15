window.addEventListener("load", main);
function main(){
    document.getElementById("nombre").addEventListener("focusout", validarNombreApellidos);
    document.getElementById("apellidos").addEventListener("focusout", validarNombreApellidos);
    document.getElementById("dni").addEventListener("focusout", validarDNI);
    document.getElementById("telefono").addEventListener("focusout", validarTelefono);
    document.getElementById("email").addEventListener("focusout", validarEmail);
    document.getElementById("nombreUsuario").addEventListener("focusout", validarUsuario);
};


function validarNombreApellidos(e) {
    let expresion = /\d/;
    if (expresion.test(e.currentTarget.value)) {
        e.target.style.backgroundColor="green";
        e.target.style.opacity="50%"
    } else {
        e.currentTarget.setCustomValidity("");
        e.target.style.backgroundColor="red";
        e.target.style.opacity="50%"
    }
}

function validarDNI(e){
    let expresion = /^\d{8}[A-Za-z]$/;
    if (expresion.test(e.currentTarget.value)) {
        e.target.style.backgroundColor="green";
        e.target.style.opacity="50%"
    } else {
        e.currentTarget.setCustomValidity("");
        e.target.style.backgroundColor="red";
        e.target.style.opacity="50%"
    }
}

function validarTelefono(e){
    let expresion = /^[6-9]\d{8}$/;
    if (expresion.test(e.currentTarget.value)) {
        e.target.style.backgroundColor="green";
        e.target.style.opacity="50%"
    } else {
        e.currentTarget.setCustomValidity("");
        e.target.style.backgroundColor="red";
        e.target.style.opacity="50%"
    }
}
function validarEmail(e){
    let expresion = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (expresion.test(e.currentTarget.value)) {
        e.target.style.backgroundColor="green";
        e.target.style.opacity="50%"
    } else {
        e.currentTarget.setCustomValidity("");
        e.target.style.backgroundColor="red";
        e.target.style.opacity="50%"
    }
}
function validarUsuario(e){
    let expresion = /^(?=.*[A-Za-zÑñ])(?=.*\d)(?=.*[,;.:'"«»()[\]{}¿?¡!-])[A-Za-zÑñ\d,;.:'"«»()[\]{}¿?¡!\-@^_+|~`<>/$%*#&]{8,}$/;
    if (expresion.test(e.currentTarget.value)) {
        e.target.style.backgroundColor="green";
        e.target.style.opacity="50%"
    } else {
        e.currentTarget.setCustomValidity("");
        e.target.style.backgroundColor="red";
        e.target.style.opacity="50%"
    }
}