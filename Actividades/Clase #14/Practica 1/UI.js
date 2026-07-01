export function mensajePedidoCreado(pedido) {
  const extrasTexto = pedido.extras?.length
    ? ` (extras: ${pedido.extras.join(", ")})`
    : "";
  return `Pedido creado para ${pedido.cliente}: ${pedido.producto} - ₡${pedido.precio}${extrasTexto}`;
}

export function mensajeTotalDia(total) {
  return `Total del día: ₡${total}`;
}

export function mensajeEdificioCliente(cliente, edificio) {
  return `Edificio de ${cliente}: ${edificio ?? "sin registrar"}`;
}

export default function resumenDelDia(...pedidosDelDia) {
  const lineas = pedidosDelDia
    .map(
      (p, i) =>
        `  ${i + 1}. ${p.cliente} — ${p.producto} — ₡${p.precio}`
    )
    .join("\n");

  return `Resumen del día
    ${lineas}
Total de pedidos: ${pedidosDelDia.length}`;
}
