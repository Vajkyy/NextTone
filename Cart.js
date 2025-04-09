import Carts from "./Carts.js";

export default class Cart {
  #cartItems;
  #cartParent;

  constructor(cartItems, cartParent) {
    this.#cartItems = cartItems;
    this.#cartParent = cartParent;

    this.view();
    this.addRemoveEvent();
  }

  view() {
    this.#cartParent.innerHTML = "";
    this.#cartItems.forEach((item, index) => {
      new Carts(item, this.#cartParent, index);
    });
  }

  addItem(product) {
    this.#cartItems.push(product);
    this.view();
    if (this.onAddCallback) {
      this.onAddCallback();
    }
  }

  addRemoveEvent() {
    window.addEventListener("remove", (event) => {
      const indexToRemove = event.detail;
      this.#cartItems.splice(indexToRemove, 1);
      this.view();
    });
  }

  onAddItem(callback) {
    this.onAddCallback = callback;
  }
}
