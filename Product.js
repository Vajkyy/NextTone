export default class Product {
    #data;
    #index;
  
    constructor(parentElement, data, index, cart) {
      this.#data = data;
      this.#index = index;
      this.parentElement = parentElement;
      this.cart = cart;
  
      this.view();
    }
  
    view() {
      const html = `
        <div class="card m-2" style="width: 18rem;">
          <img src="${this.#data.imgUrl}" class="card-img-top" alt="${this.#data.name}" />
          <div class="card-body">
            <h5 class="card-title">${this.#data.name}</h5>
            <p class="card-text">${this.#data.description}</p>
            <p class="fw-bold">${this.#data.price} €</p>
            <a href="#" class="btn btn-primary add-to-cart" data-index="${this.#index}">Kosárba</a>
          </div>
        </div>
      `;
      this.parentElement.insertAdjacentHTML("beforeend", html);
  
      const addBtn = this.parentElement.querySelector(`.add-to-cart[data-index="${this.#index}"]`);
      if (addBtn) {
        addBtn.addEventListener("click", (event) => {
          event.preventDefault();
          this.cart.addItem(this.#data);
        });
      }
    }
  }
  