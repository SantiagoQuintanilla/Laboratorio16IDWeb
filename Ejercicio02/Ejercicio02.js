const boton=document.querySelector('button');
const parrafo=document.querySelector('p');
boton.addEventListener("click", () => {
    if (parrafo.textContent==="Texto original creado en HTML") {
        parrafo.textContent="Texto cambiado con JS";
    } else {
        parrafo.textContent="Texto original creado en HTML";
    }
});