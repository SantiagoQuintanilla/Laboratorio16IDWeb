const form=document.getElementById("form");
const inputNombre=document.getElementById("nombre");
const inputEdad=document.getElementById("edad");
const cuerpoTabla=document.getElementById("cuerpoTabla");
let idActual=0;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputNombre.value===""||inputEdad.value==="") {
        alert("Llena todos los campos");
        return; 
    }
    idActual++;
    const fila=document.createElement("tr");
    fila.dataset.id=idActual;
    fila.innerHTML=`
    <td>${inputNombre.value}</td>
    <td>${inputEdad.value}</td>
    <td>
        <button class="editar">Editar</button>
        <button class="eliminar">Eliminar</button>
    </td>
    `;
    cuerpoTabla.appendChild(fila);
    inputNombre.value="";
    inputEdad.value="";
});
cuerpoTabla.addEventListener("click", (event) => {
    const fila=event.target.closest("tr");
    if (!fila) return; 
    if (event.target.classList.contains("eliminar")) {
        fila.remove();
        return;
    }
    if (event.target.classList.contains("editar")) {
        const nombreActual=fila.children[0].textContent;
        const edadActual=fila.children[1].textContent;
        const nuevoNombre=prompt("Nuevo nombre:", nombreActual);
        const nuevaEdad=prompt("Nueva edad:", edadActual);
        if(nuevoNombre&&nuevaEdad) {
            fila.children[0].textContent=nuevoNombre;
            fila.children[1].textContent=nuevaEdad;
        }
    }
});