const ventasFeria = [
  {
    stand: "Stand 3", producto: "Empanadas", categoria: "comida",
    monto: 15000, etiquetas: ["salado", "artesanal"]
  },
  {
    stand: "Stand 3", producto: "Refresco natural", categoria: "bebida",
    monto: 6000, etiquetas: ["natural"]
  },
  {
    stand: "Stand 7", producto: "Llavero tallado", categoria: "artesania",
    monto: 3500, etiquetas: ["madera", "artesanal"]
  },
  {
    stand: "Stand 7", producto: "Pulsera tejida", categoria: "artesania",
    monto: 2500, etiquetas: ["tejido"]
  },
  {
    stand: "Stand 12", producto: "Jabon artesanal", categoria: "cuidado",
    monto: 4000, etiquetas: ["natural", "artesanal"]
  },
  {
    stand: "Stand 5", producto: "Cafe de altura", categoria: "bebida",
    monto: 8000, etiquetas: ["organico"]
  },
  {
    stand: "Stand 5", producto: "Postre de cafe", categoria: "comida",
    monto: 3000, etiquetas: ["dulce"]
  },
];

console.log(typeof ventasFeria);

ventasFeria[15] = { stand: "Stand 20", producto: "Sorpresa" };
console.log(ventasFeria.length);

delete ventasFeria[15];
ventasFeria.length = 7;
console.log(ventasFeria.length);

let ventasAltasImperativo = [];
for (let i = 0; i < ventasFeria.length; i++) {
  if (ventasFeria[i].monto > 5000) {
    ventasAltasImperativo.push(ventasFeria[i]);
  }
}

let nombresProductosImperativo = [];
for (let i = 0; i < ventasFeria.length; i++) {
  nombresProductosImperativo.push(ventasFeria[i].producto.toUpperCase());
}

const ventasAltas = ventasFeria.filter(v => v.monto > 5000);
console.log(ventasAltas);

const nombresProductos = ventasFeria.map(v => v.producto.toUpperCase());
console.log(nombresProductos);

console.log(JSON.stringify(ventasAltas) === JSON.stringify(ventasAltasImperativo));
console.log(JSON.stringify(nombresProductos) === JSON.stringify(nombresProductosImperativo));

function ordenarPorMontoMutando(lista) {
  lista.sort((a, b) => b.monto - a.monto);
  return lista;
}

const ordenadas = ordenarPorMontoMutando(ventasFeria);
console.log(ventasFeria);

function ordenarPorMontoSinMutar(lista) {
  return [...lista].sort((a, b) => b.monto - a.monto);
}

const ventasFeriaFresco = [
  { stand: "Stand 3", producto: "Empanadas", categoria: "comida", monto: 15000, etiquetas: ["salado", "artesanal"] },
  { stand: "Stand 3", producto: "Refresco natural", categoria: "bebida", monto: 6000, etiquetas: ["natural"] },
  { stand: "Stand 7", producto: "Llavero tallado", categoria: "artesania", monto: 3500, etiquetas: ["madera", "artesanal"] },
  { stand: "Stand 7", producto: "Pulsera tejida", categoria: "artesania", monto: 2500, etiquetas: ["tejido"] },
  { stand: "Stand 12", producto: "Jabon artesanal", categoria: "cuidado", monto: 4000, etiquetas: ["natural", "artesanal"] },
  { stand: "Stand 5", producto: "Cafe de altura", categoria: "bebida", monto: 8000, etiquetas: ["organico"] },
  { stand: "Stand 5", producto: "Postre de cafe", categoria: "comida", monto: 3000, etiquetas: ["dulce"] },
];

const ordenadasSinMutar = ordenarPorMontoSinMutar(ventasFeriaFresco);
console.log(ventasFeriaFresco);
console.log(ordenadasSinMutar);

const reporteVentas = ventasFeria.map(v =>
  `${v.producto.toUpperCase()} (${v.stand}) — ${v.monto} colones`
);
console.log(reporteVentas);
console.log(reporteVentas.length === ventasFeria.length);

const ventasArtesania = ventasFeria.filter(v => v.categoria === "artesania");
console.log(ventasArtesania);

const nombresArtesania = ventasFeria
  .filter(v => v.categoria === "artesania")
  .map(v => v.producto);
console.log(nombresArtesania);

const primeraVentaAlta = ventasFeria.find(v => v.monto > 7000);
console.log(primeraVentaAlta);

const posicionVentaAlta = ventasFeria.findIndex(v => v.monto > 7000);
console.log(posicionVentaAlta);

const totalPorCategoria = ventasFeria.reduce((acumulador, venta) => {
  acumulador[venta.categoria] = (acumulador[venta.categoria] || 0) + venta.monto;
  return acumulador;
}, {});
console.log(totalPorCategoria);

const totalGeneralFeria = ventasFeria.reduce((acumulador, venta) => acumulador + venta.monto, 0);
console.log(totalGeneralFeria);

const montos = ventasFeria.map(v => v.monto);
console.log([...montos].sort());

const ventasOrdenadasPorMonto = [...ventasFeria].sort((a, b) => b.monto - a.monto);
console.log(ventasOrdenadasPorMonto);
console.log(ventasFeria);

const todasLasEtiquetas = ventasFeria.flatMap(v => v.etiquetas);
console.log(todasLasEtiquetas);

const etiquetasUnicas = new Set(todasLasEtiquetas);
console.log(etiquetasUnicas.size);

const miniReporteArtesania = ventasFeria
  .filter(v => v.categoria === "artesania")
  .map(v => `${v.producto} — ${v.monto} colones`)
  .sort();
console.log(miniReporteArtesania);