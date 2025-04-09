import Product from "./Product.js";

export default class ProductList {
    #product=[]
    constructor(products, prodParent) {
        this.products = products;
        this.prodParent = prodParent;
        this.view();
    }

    view() {
        this.prodParent.innerHTML = "";
        this.products.forEach((product, index) => {
            new Product(this.prodParent, product, index);
        });
    }
}
