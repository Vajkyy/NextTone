import Product from "./Product.js";

export default class ProductList {
    constructor(products, prodParent) {
        this.products = products;
        this.prodParent = prodParent;
        this.render();
    }

    render() {
        this.prodParent.innerHTML = "";
        this.products.forEach((product, index) => {
            new Product(this.prodParent, product, index);
        });
    }
}
