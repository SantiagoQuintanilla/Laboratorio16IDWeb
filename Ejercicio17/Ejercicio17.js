const jsonPersona= `{
    "nombre": "Rosa",
    "edad": 29,
    "ciudad": "Lima"
}`;
let persona=JSON.parse(jsonPersona);
console.log("JSON original:", persona);
persona.edad=30;
const jsonActualizado=JSON.stringify(persona);
console.log("Objetos JS modificado: ", persona);
console.log("JSON actualizado:", jsonActualizado);