import { pedidos, crearPedido, calcularTotalDia, obtenerEdificioCliente } from "./pedidos.js";
import { mensajePedidoCreado, mensajeTotalDia, mensajeEdificioCliente } from "./ui.js";
import resumenDelDia from "./ui.js"; 


const preferenciasCliente = {
  ana: { direccion: { edificio: "Aulas 3" } },
  luis: {},
};
const pedido1 = crearPedido(
  { cliente: "Ana", producto: "Casado", precio: 2500, notas: "Sin cebolla" },
  "aguacate",
  "tortilla extra"
);
console.log(mensajePedidoCreado(pedido1));

const pedido2 = crearPedido({
  cliente: "Luis",
  producto: "Café con pan",
  precio: 1200,
  notas: undefined,
});
console.log(mensajePedidoCreado(pedido2));

const edificioAna = obtenerEdificioCliente(preferenciasCliente, "ana");
const edificioLuis = obtenerEdificioCliente(preferenciasCliente, "luis");
console.log(mensajeEdificioCliente("Ana", edificioAna));
console.log(mensajeEdificioCliente("Luis", edificioLuis));

console.log(mensajeTotalDia(calcularTotalDia()));


console.log(resumenDelDia(...pedidos));