import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const cart = [];

console.log("BEM VINDO AO CARRINHO DE COMPRAS!");

const item1 = createItem("Caneta", 5, 1);
const item2 = createItem("Mesa", 345, 1);
const item3 = createItem("Memoria Ram", 450, 2);
const item4 = createItem("Teclado", 120, 1);

cartService.addItem(cart, item1);
cartService.addItem(cart, item2);
cartService.addItem(cart, item3);
cartService.addItem(cart, item4);

cartService.calcTotal(cart);
