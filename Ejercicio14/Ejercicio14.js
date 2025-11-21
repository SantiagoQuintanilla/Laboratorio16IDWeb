const lista=document.createElement('ul');
const productos = [
    { nombre: "Laptop", precio: 3500},
    { nombre: "Mouse", precio: 40},
    { nombre: "Auriculares", precio: 120},
    { nombre: "Teclado", precio: 80}
];
const jsonProductos=JSON.stringify(productos);
const productosParseados=JSON.parse(jsonProductos);
productosParseados.forEach(prod => {
    const li=document.createElement("li");
    li.textContent=prod.nombre;
    lista.appendChild(li);
});
document.body.appendChild(lista);
