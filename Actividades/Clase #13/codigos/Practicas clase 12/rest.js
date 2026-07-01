function sumarTodo(...numeros){
    return numeros.reduce ((acum, n) => acum + n, 0);
}

console.log (sumarTodo (1, 2, 3));
console.log (sumarTodo (5, 50, 10));










