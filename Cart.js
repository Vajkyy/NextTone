import Carts from "./Carts.js";

export default class Cart {
    #cartItems = [];
    constructor(cartItems, cartParent) {
        this.#cartItems = cartItems;
        this.cartParent = cartParent;
        this.view();
        this.removeItem();
    }

    view() {
        this.cartParent.innerHTML = "";
        this.#cartItems.forEach((item, index) => {
            new Carts(item, this.cartParent, index);
        });
    }

    removeItem() {
        window.addEventListener("remove", (event) => {
            console.log("Törlés index:", event.detail);
            this.#cartItems.splice(event.detail, 1);
            this.view();
        });
    }

    addItem(product) {
        this.#cartItems.push(product);
        this.view();
    }
}
