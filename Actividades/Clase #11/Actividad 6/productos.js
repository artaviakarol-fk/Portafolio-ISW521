
export const agregarProducto = (lista, { nombre, precio }) => {
  lista.push({ nombre, precio });
  return lista;
};

export const calcularTotal = (lista) =>
  lista.reduce((total, { precio }) => total + (precio ?? 0), 0);

export const leerProductoSeguro = (productoCrudo) => {
  const nombre = productoCrudo?.nombre ?? "Producto sin nombre";
  const precio = productoCrudo?.precio ?? 0;
  const categoria = productoCrudo?.detalles?.categoria ?? "Sin categoría";
  return { nombre, precio, categoria };
};
