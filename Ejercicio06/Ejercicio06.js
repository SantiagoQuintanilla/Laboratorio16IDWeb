const boton=document.querySelector('button');
const texto=document.getElementById('nombre');
const correo=document.getElementById('correo');
const cuerpo=document.body;
boton.addEventListener("click", () => {
    if (texto.value===""||correo.value==="") {
        const alerta=document.createElement("span");
        const salto=document.createElement("br");
        alerta.textContent="Error! Debe llenar todos los campos";
        alerta.style.color="red";
        cuerpo.insertBefore(alerta, boton);
        cuerpo.insertBefore(salto, boton);
    } else {
        alert("Validacion completada!");
    }
});