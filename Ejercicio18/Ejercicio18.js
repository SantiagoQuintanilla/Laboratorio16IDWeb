const inputNombre=document.querySelector("input");
const botonGuardar=document.querySelector("button");
botonGuardar.addEventListener("click", () => {
    const usuario={
        nombre: inputNombre.value
    };
    const jsonUsuario=JSON.stringify(usuario);
    console.log(jsonUsuario);
});