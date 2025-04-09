import { myProductList } from "./myProductList.js";
import ProductList from "./ProductList.js";
import Cart from "./Cart.js";

const productSection = document.querySelector("article");
const cartSection = document.querySelector(".cart");
const aside = document.querySelector("aside");

const cart = new Cart([], cartSection);

// Toggle gomb
const toggleCartBtn = document.createElement("button");
toggleCartBtn.textContent = "🛒";
toggleCartBtn.classList.add("btn", "btn-secondary", "position-fixed", "top-0", "end-0", "m-3", "z-3");
document.body.appendChild(toggleCartBtn);

let cartVisible = false;
aside.style.display = "none";

toggleCartBtn.addEventListener("click", () => {
  cartVisible = !cartVisible;
  aside.style.display = cartVisible ? "block" : "none";
});

// Kosár automatikus megjelenítése ha van benne cucc
const originalAddItem = cart.addItem.bind(cart);
cart.addItem = (product) => {
  originalAddItem(product);
  aside.style.display = "block";
  cartVisible = true;
};

// Figyeljük az "add" eseményt a Product.js-ből
window.addEventListener("add", (event) => {
  const productIndex = event.detail;
  const product = myProductList[productIndex];
  cart.addItem(product);
});

new ProductList(myProductList, productSection, cart);
