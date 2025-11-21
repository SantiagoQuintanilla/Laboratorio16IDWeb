const boton=document.querySelector('button');
const productos=[
    {nombre: "Laptop", precio:3500},
    {nombre: "Mouse", precio:80},
]

boton.addEventListener("click", () => {
    const tabla=document.createElement('table');
    tabla.setAttribute("border", 1);
    const etiquetas=document.createElement('tr');
    const nombre=document.createElement('th');
    const precio=document.createElement('th');
    nombre.textContent="Nombre";
    precio.textContent="Precio";
    etiquetas.appendChild(nombre);
    etiquetas.appendChild(precio);
    tabla.appendChild(etiquetas);
    for (let i=0; i<productos.length; i++) {
        let datos=document.createElement('tr');
        let nombre=document.createElement('th');
        let precio=document.createElement('th');
        nombre.textContent=productos[i].nombre;
        precio.textContent=productos[i].precio;
        datos.appendChild(nombre);
        datos.appendChild(precio);
        tabla.appendChild(datos);
    }
    document.body.appendChild(tabla);
});