import ProductList from "./ProductList.js";
import Cart from "./Cart.js";
import { myProductList } from "./myProductList.js";

const articleElem = document.querySelector("article");
const cartElem = document.querySelector(".cart");
const asideElem = document.querySelector("aside");
const toggleCartBtn = document.querySelector("#cartToggle");

const cart = new Cart([], cartElem);
const productList = new ProductList(myProductList, articleElem, cart);

let cartVisible = false;
asideElem.style.display = "none";

toggleCartBtn.addEventListener("click", () => {
  cartVisible = !cartVisible;
  asideElem.style.display = cartVisible ? "block" : "none";
});

cart.onAddItem(() => {
  asideElem.style.display = "block";
  cartVisible = true;
});
