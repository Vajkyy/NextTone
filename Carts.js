import Cart from "./Cart.js";

export default class Carts {
    constructor(cartsParent) {
        this.cartsParent = cartsParent;
        this.cartItems = [];
        this.view();
        this.addEvent();
    }

    view() {
        this.cartsParent.innerHTML = "<h2>Kosár</h2>";
        this.cartItems.forEach(item => {
            new Cart(this.cartsParent, item);
        });
    }

    addEvent() {
        window.addEventListener("addToCart", (event) => {
            this.cartItems.push(event.detail);
            this.render();
        });

        this.cartsParent.addEventListener("click", (e) => {
            if (e.target.classList.contains("remove")) {
                const name = e.target.dataset.name;
                this.cartItems = this.cartItems.filter(item => item.name !== name);
                this.render();
            }
        });
    }
}
