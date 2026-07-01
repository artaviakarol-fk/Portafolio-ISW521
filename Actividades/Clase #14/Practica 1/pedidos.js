export const nombreSoda = "La Sodita UTN";

export const pedidos = [];

export function crearPedido({ cliente, producto, precio, notas }, ...extras) {
  const pedido = { cliente, producto, precio, notas, extras };
  pedidos.push(pedido);
  return pedido;
}

export function calcularTotalDia() {
  let total = 0;
  for (const pedido of pedidos) {
    total += pedido.precio ?? 0;
  }
  return total;
}

export function aplicarDescuento(pedido, porcentaje) {
  const nuevoPrecio = pedido.precio - (pedido.precio * porcentaje) / 100;
  return { ...pedido, precio: nuevoPrecio };
}

export function obtenerEdificioCliente(preferenciasCliente, clienteId) {
  return preferenciasCliente[clienteId]?.direccion?.edificio;
}
