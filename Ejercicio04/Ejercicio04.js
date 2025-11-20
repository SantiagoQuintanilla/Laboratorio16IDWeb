const botonA=document.getElementById("añadir");
const botonR=document.getElementById("restar");
const contador=document.querySelector("span");
botonA.addEventListener("click", () => {
    contador.textContent=Number(contador.textContent)+1;
});
botonR.addEventListener("click", () => {
    let valor=Number(contador.textContent);
    if (valor===0) {
        alert("Contador en 0! No puede restar");
    } else {
        contador.textContent=valor-1;
    }
})