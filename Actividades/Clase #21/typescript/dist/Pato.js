"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pato = void 0;
const ave_1 = require("./ave");
class Pato extends ave_1.Ave {
    nombre;
    constructor(color, especie, sonido, nombre) {
        super(color, especie, sonido);
        this.nombre = nombre;
    }
}
exports.Pato = Pato;
//# sourceMappingURL=Pato.js.map