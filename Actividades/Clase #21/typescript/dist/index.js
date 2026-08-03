"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hola companera Joselyn");
console.log("Hola companero Leal");
console.log("Hola companero Belem");
let nombre = "Hola bbe"; //explicito 
let nombreDos = "Shaki";
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
function suma(a, b) {
    return a + b;
}
function restar(a, b, c) {
    return a - b - (c || 0);
}
console.log(restar(10, 5, 2));
const Estudiante_1 = require("./Estudiante");
const Pato_1 = require("./Pato");
let estudiante = new Estudiante_1.Estudiante(205550666, "Pepe", "Angulo", 22);
let pato = new Pato_1.Pato("Blanco", "Domestico", "Cuac", "Lucas");
pato.comer("insectos");
estudiante.matricular();
//# sourceMappingURL=index.js.map