const jsonLibros=`[
    {"titulo": "Cien años de soledad", "autor": "Gabriel García Márquez"},
    {"titulo": "1984", "autor": "George Orwell"},
    {"titulo": "Don Quijote de la Mancha", "autor": "Miguel de Cervantes"},
    {"titulo": "22/11/63", "autor": "Stephen King"}
]`;
const libros=JSON.parse(jsonLibros);
const contenidoTabla=document.getElementById("contenidoTabla");
libros.forEach(libro => {
    const fila=document.createElement("tr");
    fila.innerHTML=`
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
    `;
    contenidoTabla.appendChild(fila);
});