class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>



      </style>


    `;
  }
}

customElements.define("produto-template", Footer);
