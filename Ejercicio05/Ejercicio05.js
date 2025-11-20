const lista=document.querySelector('ol');
const input=document.querySelector('input');
const botonA=document.getElementById('añadir');
const botonB=document.getElementById('borrar');
botonA.addEventListener("click", () => {
    const elemento=document.createElement('li');
    elemento.textContent=input.value;
    lista.appendChild(elemento);
}); 
botonB.addEventListener("click", () => {
    const eliminar=lista.lastElementChild;
    eliminar.remove();
});