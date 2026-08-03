import { Ave } from "./ave";

export class Pato extends Ave {
  nombre: string;
  constructor(color: string, especie: string, sonido: string, nombre: string) {
    super(color, especie, sonido);
    this.nombre = nombre;
  }
}