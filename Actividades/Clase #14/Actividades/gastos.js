const gastos = [
{ cat: "comida", monto: 5000 }, 
{ cat: "transporte", monto: 2000},
{ cat: "comida", monto: 3000 }
]
const total = gastos.reduce ((acc,g ) => acc + g.monto, 0);

console.log(total);
