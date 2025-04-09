import Cart from "./Cart.js";

const kosarElem = document.querySelector(".kosar");
const tesztTermekek = [
    { name: "Fender Stratocaster", price: 420000 },
    { name: "Gibson Les Paul", price: 550000 }
];

const cart = new Cart(tesztTermekek, kosarElem);

