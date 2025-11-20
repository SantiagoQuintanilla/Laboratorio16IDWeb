const boton=document.querySelector('button');
const parrafo=document.querySelector('p');
boton.addEventListener("click", () => {
    parrafo.textContent="Texto cambiado con JS";
});