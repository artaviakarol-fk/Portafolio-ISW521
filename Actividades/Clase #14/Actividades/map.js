/*const estudiantes = [
    { nombre: "Ana", carnet: "205469"},
    { nombre: "Luis", carnet: "204659"}
];

console.log()*/ 


const estudiantes = [
    {nombre: "Ana", carnet: "202020"},
    {nombre: "Luis", carnet: "567890"}
];
estudiantes.map(e =>  `${e.nombre} (${e.carnet})`.toUpperCase());
console.log(estudiantes);