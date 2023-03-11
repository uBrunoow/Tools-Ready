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
          background-color: #ff7a00;
          width: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
      }
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
          gap: 50px;
        }


        .marcaregistrada {
          padding: 10px;
          width: 100vw;
          background-color: #A45214;
          text-align: center;
          color: #fff;
          font-size: 13px;
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
       <div class="marcaregistrada">
            <p>ToolsReady! É uma marca registrada de TOOLS READY  | CNPJ: 11.234.567/0001-90 | Todos os direitos reservados <br>
            <span>ESCOLA S SESI/SENAI</span></p>
        </div>
      </footer>
    `;
  }
}

customElements.define("footer-template", Footer);
