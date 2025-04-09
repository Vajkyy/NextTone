import Product from "./Product.js";

export default class ProductList {
  #products;
  #prodParent;

  constructor(products, prodParent, cart) {
    this.#products = products;
    this.#prodParent = prodParent;
    this.cart = cart;
    this.view();
  }

  view() {
    this.#products.forEach((product, index) => {
      new Product(this.#prodParent, product, index, this.cart);
    });
  }
}
