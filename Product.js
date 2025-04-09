export default class Product {
  #data;

  #index;

  constructor(parentElement, data, index) {
    this.#data = data;
    this.#index = index;
    this.view();
  }

  view() {
    const HTML = `<img src="${this.#data.imgUrl}" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">${this.#data.name}</h5>
            <p class="card-text">
              ${this.#data.description}
            </p>
            <p>${this.#data.price}</p>
            <a href="#" class="btn btn-primary">To Cart</a>
    
    `;
    this.parentElement.insertAdjacentHTML("beforeend", HTML);
  }
  addItem() {
    this.AddElem.addEventListener("click", () => {
      const e = new CustomEvent("add", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
