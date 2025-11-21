const nombre=document.createElement('p');
const edad=document.createElement('p');
const ciudad=document.createElement('p');

const jsonString= `{
    "nombre": "Rodrigo",
    "edad": 22,
    "ciudad": "Arequipa"
}`;
const persona=JSON.parse(jsonString);
nombre.textContent="Nombre: "+persona.nombre;
edad.textContent="Edad: "+persona.edad;
ciudad.textContent="Ciudad: "+persona.ciudad;
document.body.appendChild(nombre);
document.body.appendChild(edad);
document.body.appendChild(ciudad);