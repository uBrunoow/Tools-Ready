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
          display:flex;
          background-color: #ff7a00;
          height: 70px;
          width: 100%;
          justify-content: center;
        }

        ul{
          width:60%;
        }
        ul li img{
          margin-top:3px;
          width: 15px;
        }

        li a{
          text-decoration:none;
          color:white;
          font-weight:600;
        }

        li a:hover{
          text-decoration: underline; 
        }

        .lista {
          display: flex;
          justify-content: space-evenly;
          padding: 25px;
          list-style: none;
        }

      </style>
      <footer>
       <ul class="lista">
        <li><a href="/">Politica do site e Marketplace</a></li>
        <li><img src="/Images/Ellipse.svg"></img>
        <li><a href="/">Politicas de privacidade</a></li>
        <li><img src="/Images/Ellipse.svg"></img>
        <li><a href="/">Exerça seus direitos de privacidade</a></li>
       </ul>
      </footer>
    `;
  }
}

customElements.define("footer-template", Footer);
