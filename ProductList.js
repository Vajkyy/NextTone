import Product from "./Product.js";

export default class ProductList {
  constructor(productList, parent) {
    this.productList = productList;
    this.parent = parent;

    this.renderProducts();
  }

  renderProducts() {
    this.productList.forEach((product, index) => {
      new Product(this.parent, product, index);
    });
  }
}
