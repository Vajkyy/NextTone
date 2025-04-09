import ProductList from "./ProductList.js";
import Cart from "./Cart.js";
import { myProductList } from "./myProductList.js";

const main = {
  parentElement: document.querySelector("article"),
  cartParent: document.querySelector(".cart"),
};

const cart = new Cart([], main.cartParent);
const productList = new ProductList(myProductList, main.parentElement, cart);

const toggleCartBtn = document.createElement("button");
toggleCartBtn.textContent = "🛒";
toggleCartBtn.classList.add("btn", "btn-secondary", "position-fixed", "top-0", "end-0", "m-3", "z-3");
document.body.appendChild(toggleCartBtn);

let cartVisible = false;
document.querySelector("aside").style.display = "none";

toggleCartBtn.addEventListener("click", () => {
  cartVisible = !cartVisible;
  document.querySelector("aside").style.display = cartVisible ? "block" : "none";
});

cart.onAddItem(() => {
  document.querySelector("aside").style.display = "block";
  cartVisible = true;
});
