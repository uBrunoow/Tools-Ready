class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
        }  


        footer {
          display: flex;
          justify-content: space-between;
          background-color: #ff7a00;
          height: 80px;
          width: 100%;
          border-top: 5px solid #000;
        }

        .lista {
          align-items: center;
          list-style: disc;
        }

        li {
          // margin-left: 365px;
        }

      </style>
      <footer>
       <ul class="lista">
       <li><a href="/">Politica do site e Marketplace</a></li>
       <li><a href="/">Politicas de privacidade</a></li>
       <li><a href="/">Exerça seus direitos de privacidade</a></li>
       </ul>
      </footer>
    `;
  }
}

customElements.define("footer-template", Footer);
