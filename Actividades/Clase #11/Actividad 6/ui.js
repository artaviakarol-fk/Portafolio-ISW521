
export const mostrarProductoAgregado = ({ nombre, precio }) =>
  `Agregado: ${nombre} - $${precio}`;

export const mostrarTotal = (total) => `Total: $${total}`;

export const mostrarProductoSeguro = ({ nombre, precio, categoria }) =>
  `${nombre} (${categoria}) - $${precio}`;


export const renderEnPantalla = (lineas) => {
  const contenedor = document.querySelector("#salida");
  if (!contenedor) return;
  contenedor.textContent = lineas.join("\n");
};
