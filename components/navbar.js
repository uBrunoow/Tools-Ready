class Header extends HTMLElement {
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


        nav{
          display: flex;
          justify-content: space-between;
          align-itens: center;
          background-color: #ff7a00;
          height: 120px;
          border-bottom: 11px solid #000;
        }

        img {
          height: auto;
          width: 57px;
        }

         nav span {
          color: #FFF;
          font-size: 15px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
        }

        nav a {
          color: #FFF;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          line-height: 24px;
        }
        
        nav .login {
          margin: 35px 190px 0 0;
          display: flex;
          justify-content: center;
          align-itens: center;
        }

      </style>
      <header>
        <nav>
         <div class="logo"></div>
         <div class = "login"> 
         <div>
         <img src="/Images/USER.png" alt="">
         </div>
         <span>
         <a href="/pages/login.html"> Entre </a>
         com a sua conta <br/>
          Novo na ToolsReady?
           <a href="/pages/login.html"> Cadastre-se </a>
           </span>
         </div>
        </nav>
      </header>
    `;
  }
}

customElements.define("navbar-1", Header);