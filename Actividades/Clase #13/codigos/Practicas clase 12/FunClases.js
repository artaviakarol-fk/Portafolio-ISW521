function saludar(nombre) {
    return `Hola ${nombre}`;
}

function procesar (functionsaludo, nombre) {
    return functionsaludo(nombre).toUpperCase ();
}

console.log(procesar(saludar, "Ana"));


