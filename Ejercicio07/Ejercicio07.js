const miniaturas=document.getElementById('miniaturas');
const imagenGrande=document.getElementById('imagenPrincipal');
miniaturas.addEventListener("click", (e) => {
    if (e.target.classList.contains("mini")) {
        imagenGrande.src=e.target.src;
    }
});