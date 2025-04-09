export default class Product {
    #data;
    #index;
  
    constructor(parentElement, data, index, cart) {
      this.#data = data;
      this.#index = index;
      this.parentElement = parentElement;
      this.cart = cart;
  
      this.view();
      this.addEvent();
    }
  
    view() {
      const HTML = `
        <div class="card m-2" style="width: 18rem;">
          <img src="${this.#data.imgUrl}" class="card-img-top" alt="${this.#data.name || 'Guitar'}"/>
          <div class="card-body">
            <h5 class="card-title">${this.#data.name || 'Guitar'}</h5>
            <p class="card-text">${this.#data.description || 'No description available.'}</p>
            <p class="fw-bold">${this.#data.price}€</p>
            <a href="#" class="btn btn-primary add-to-cart" data-index="${this.#index}">To Cart</a>
          </div>
        </div>
      `;
      this.parentElement.insertAdjacentHTML("beforeend", HTML);
    }
  
    addEvent() {
      const addBtn = this.parentElement.querySelector(`.add-to-cart[data-index="${this.#index}"]`);
      if (addBtn) {
        addBtn.addEventListener("click", (event) => {
          event.preventDefault();
          this.cart.addItem(this.#data);
        });
      }
    }
  }
  