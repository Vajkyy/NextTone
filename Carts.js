export default class Carts {
    constructor(product, parentElem, index) {
      this.product = product;
      this.parentElem = parentElem;
      this.index = index;
  
      this.view();
    }
  
    view() {
      const wrapper = document.createElement("div");
      wrapper.classList.add("cart-item");
      wrapper.innerHTML = `
        <p><strong>${this.product.name}</strong></p>
        <p>Ár: ${this.product.price} €</p>
        <button class="delete">🧺 Törlés</button>
      `;
  
      const deleteBtn = wrapper.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        const event = new CustomEvent("remove", { detail: this.index });
        window.dispatchEvent(event);
      });
  
      this.parentElem.appendChild(wrapper);
    }
  }
  