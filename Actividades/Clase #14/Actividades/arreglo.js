const numeros = [100, 20, 15, 14, 36, 10];
numeros.sort((a, b ) => a - b);
console.log(numeros);

for (let i = 0; 1< numeros.length; i++){
    console.log(numeros[i]);

}
 
// map extrae cada valor del arreglo 
const declarativo = numeros.map((n) => n);
console.log(declarativo);