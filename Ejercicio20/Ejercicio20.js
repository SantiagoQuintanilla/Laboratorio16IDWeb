function mostrarPerfil(perfil) {
    divPerfil.innerHTML=`
    <p>Nombre: ${perfil.nombre}</p>
    <p>Edad: ${perfil.edad}</p>
    <p>País: ${perfil.pais}</p>  
    `;
}
const form=document.querySelector('form');
const divPerfil=document.getElementById("perfil");
const perfilGuardado=localStorage.getItem("perfil");
if (perfilGuardado) {
    mostrarPerfil(JSON.parse(perfilGuardado));
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre=document.getElementById("nombre").value;
    const edad=document.getElementById("edad").value;
    const pais=document.getElementById("pais").value; 
    if (nombre===""||edad===""||pais==="") {
        alert("Completa todos los campos");
        return; 
    }
    const perfil ={ nombre, edad, pais};
    localStorage.setItem("perfil", JSON.stringify(perfil));
    mostrarPerfil(perfil);

    form.reset();
});