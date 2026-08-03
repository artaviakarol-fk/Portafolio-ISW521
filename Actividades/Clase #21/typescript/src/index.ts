console.log("Hola companera Joselyn");
console.log("Hola companero Leal");
console.log("Hola companero Belem");

let nombre: String = "Hola bbe"; //explicito 
let nombreDos = "Shaki";

function saludar(nombre: String): void{
    console.log (`Hola ${nombre}`);
}

function suma(a: number, b: number): number{
        return a+b;
}

function restar(a: number, b: number,  c?: number): number{
        return a-b-(c||0);
}

console.log(restar(10, 5, 2));

import {Estudiante} from "./Estudiante"; 
import { Pato } from "./Pato";


let estudiante =  new Estudiante(205550666, "Pepe", "Angulo", 22);
let pato = new Pato("Blanco", "Domestico", "Cuac", "Lucas");
pato.comer("insectos");
estudiante.matricular();