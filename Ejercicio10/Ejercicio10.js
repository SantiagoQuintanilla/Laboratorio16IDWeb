const cuadro=document.getElementById("cuadro");
const botonMover=document.getElementById("mover");
const botonReiniciar=document.getElementById("reiniciar");

botonMover.addEventListener("click", () => {
    position+=50;
    cuadro.style.left=position+"px";
});
botonReiniciar.addEventListener("click", () => {
    position=0;
    cuadro.style.left="0px";
});