const contenedor=document.createElement('div');
const usuario={
    nombre: "Santiago",
    correo: "squintanilla@unsa.edu.pe",
    rol: "Administrador"
};
localStorage.setItem("usuario", JSON.stringify(usuario));
const usuarioGuardado=JSON.parse(localStorage.getItem("usuario"));
contenedor.innerHTML=`
    <p>Nombre: ${usuarioGuardado.nombre}</p>
    <p>Correo: ${usuarioGuardado.correo}</p>
    <p>Rol: ${usuarioGuardado.rol}</p>
`;
document.body.appendChild(contenedor);