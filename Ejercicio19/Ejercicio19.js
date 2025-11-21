const jsonTareas=`[
    {"titulo": "Estudiar Calculo", "completada": true},
    {"titulo": "Practicar guitarra", "completada": false},
    {"titulo": "Preparar comida", "completada": true},
    {"titulo": "Terminar tareas", "completada": false}
]`;
const tareas=JSON.parse(jsonTareas);
const lista=document.getElementById("listaTareas");
tareas.forEach(tarea => {
    const li=document.createElement("li");
    li.textContent=tarea.titulo; 
    li.style.color=tarea.completada ? "green" : "red";
    lista.appendChild(li);
});