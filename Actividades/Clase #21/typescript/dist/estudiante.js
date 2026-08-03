"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    cedula;
    nombre;
    primer_Apellido;
    edad;
    constructor(cedula, nombre, primer_Apellido, edad) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.primer_Apellido = primer_Apellido;
        this.edad = edad;
    }
    matricular() {
        console.log(`La cedula: ${this.cedula} nombere: ${this.nombre} primer apellido: ${this.primer_Apellido} edad: ${this.edad}`);
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map