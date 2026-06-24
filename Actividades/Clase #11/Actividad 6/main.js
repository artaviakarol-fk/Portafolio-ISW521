

import { agregarProducto, calcularTotal, leerProductoSeguro } from "./productos.js";
import {
  mostrarProductoAgregado,
  mostrarTotal,
  mostrarProductoSeguro,
  renderEnPantalla,
} from "./ui.js";

let listaProductos = [];
const lineasParaPantalla = [];

const registrar = (linea) => {
  console.log(linea);
  lineasParaPantalla.push(linea);
};

const teclado = { nombre: "Teclado", precio: 15000 };
agregarProducto(listaProductos, teclado);
registrar(mostrarProductoAgregado(teclado));

const mouse = { nombre: "Mouse", precio: 8000 };
agregarProducto(listaProductos, mouse);
registrar(mostrarProductoAgregado(mouse));

registrar(mostrarTotal(calcularTotal(listaProductos)));

const productoIncompletoDeApi = { nombre: "Monitor" };
const productoSeguro = leerProductoSeguro(productoIncompletoDeApi);
registrar(mostrarProductoSeguro(productoSeguro));

renderEnPantalla(lineasParaPantalla);
