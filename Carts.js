export default class Carts {
    constructor(product, parentElem, index) {
        this.product = product;
        this.parentElem = parentElem;
        this.index = index;

        this.view();
        this.deleteBtn = document.querySelectorAll(".delete")[index];
        this.setDeleteListener();
    }

    view() {
        const html = `
            <div class="cart-item">
                <p><strong>${this.product.name}</strong></p>
                <p>Ár: ${this.product.price} Ft</p>
                <button class="delete">🧺 Törlés</button>
            </div>
        `;
        this.parentElem.insertAdjacentHTML("beforeend", html);
    }

    setDeleteListener() {
        this.deleteBtn.addEventListener("click", () => {
            const event = new CustomEvent("remove", { detail: this.index });
            window.dispatchEvent(event);
        });
    }
}
