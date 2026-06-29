import { Animal } from "./Animal.js";

export class Perro extends Animal {
  constructor(nombre, edad, tamano, color, raza) {
    super(nombre, edad, tamano, color);
    this.raza = raza; 

  }
}