export default class Product {
    constructor(parentElement, product, index) {
        this.parentElement = parentElement;
        this.name = product.name;
        this.price = product.price;
        this.description = product.description;
        this.imgUrl = product.imgUrl;
        this.index = index;
        this.render();
    }

    render() {
        this.parentElement.insertAdjacentHTML("beforeend", `
            <div class="product">
                <h3>${this.name}</h3>
                <p>${this.description}</p>
                <p><strong>${this.price} Ft</strong></p>
                <button class="add-to-cart" data-index="${this.index}">Kosárba</button>
            </div>
        `);
    }
}
