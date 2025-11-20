const boton=document.querySelector('button');
const fondo=document.body;
let verificacion=false;
fondo.style.backgroundColor="white";
boton.addEventListener("click", () => {
    if (!verificacion) {
        fondo.style.backgroundColor="black";
        fondo.style.color="white";
        boton.textContent="Modo Claro";
        verificacion=true;
    } else {
        fondo.style.backgroundColor="white";
        fondo.style.color="black";
        boton.textContent="Modo Oscuro"
        verificacion=false;
    }
});