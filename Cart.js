export default class Cart {
    constructor(cartParent, item) {
        this.cartParent = cartParent;
        this.cartItem = item;
        this.view();
    }

    view() {
        this.cartParent.insertAdjacentHTML("beforeend", `
            <div class="cart-item">
                <h4>${this.cartItem.name}</h4>
                <p>${this.cartItem.price} Ft</p>
                <button class="remove" data-name="${this.cartItem.name}">Törlés</button>
            </div>
        `);
    }
}
