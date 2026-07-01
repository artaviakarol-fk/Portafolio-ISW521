
//imperativo 
const precios = [100, 250, 80, 400];
const caros = [];
for (let i = 0; i < precios.length; i++) {
  if (precios[i] > 150) caros.push(precios[i]);
}

//declarativo
const numeros = [1000,20,16,80,70,95,151];

const caros = numeros.filter(p => p > 150);

console.log(caros);