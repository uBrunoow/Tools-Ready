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

        .news {
          background: #A45214;
          padding: 20px;
      }

      
      .rodape {
          background-color: #FF7A00;
          color: #fff;
          display: flex;
          justify-content: space-evenly;
          padding-bottom: 50px;
      }
      
      .bold {
          font-weight: bold;
          font-size: 20px;
          margin: 30px 0px 20px 0px;
          cursor: default;
      }
      
      li { 
          cursor: pointer;
          font-size: 16px;
          margin-top: 8px;
      }
      
      a {
          color: #fff;
          cursor: pointer;
          font-size: 18px;
          text-decoration: none;
      }
      
      a:hover {
          color: #ffc997;
      }
      
      .box {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      .box .butn {
          display: flex;
          width: 50px;
          height: 50px;
          margin: 0 8px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 10%);
          border-radius: 50%;
          align-items: center;
          justify-content: center;
      }
      
      .butn {
          transition: all .2s ease-out;
      }
      
      .box .butn:hover {
          transform: scale(1.2);
          background: #A45214;
          box-shadow: 0px 0px 10px 10px rgb(0 0 0 / 10%);
          outline: 1px solid #fff;
      }
      
      
      
      .marcaregistrada {
          padding: 10px;
          background-color: #A45214;
          text-align: center;
          color: #fff;
          font-size: 13px;
      }   
      </style>
      <footer>
      <div class="container5">
      <div class="news">
          <div class="texto">
          </div>
      </div>
      <div class="rodape">
          <ul type="none">
              <li class="bold">Departamentos</li>
              <li><a href="#">Autocenter & motocenter</a></li>
              <li><a href="#">Construção Civil</a></li>
              <li><a href="#">Marcenaria</a></li>
              <li><a href="#">Movimentação e Elevação</a></li>
              <li><a href="#">Bancadas e Estsantes</a></li>
              <li><a href="#">Pedestais e Guinchos</a></li>
              <li><a href="#">Motores e geradores</a></li>
          </ul>

          <ul type="none">
              <li class="bold">Novidades e promoções</li>
              <li><a href="#">NatalReady!</a></li>
              <li><a href="#">Produtos em destaque</a></li>
          </ul>

          <ul type="none">
              <li class="bold">Institucional</li>
              <li><a href="#">Sobre ToolsReady!</a></li>
              <li><a href="#">Políticas do Site e Marketplace</a></li>
              <li><a href="#">Política de Cookies</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="https://www.procon.df.gov.br/wp-content/uploads/2019/08/Codigo-do-consumidor-FINAL.pdf" target="_blank">Código de Defesa do consumidor</a></li>
              <li><a href="#">Exerça seus direitos de privacidade</a></li>
          </ul>

          <ul type="none">
              <li class="bold">Minha conta</li>
              <li><a href="#">Meus pedidos</a></li>
              <li><a href="#">Cadastrar ou remover as NoVaS</a></li>
              <li class="bold">Mídias Sociais</li>
                  <div class="box">
                      <li>
                          <a href="https://www.instagram.com/" class="butn instagram" target="_blank">
                              <div class="icon">
                                  <ion-icon name="logo-instagram"></ion-icon>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://twitter.com/" class="butn twitter" target="_blank">
                              <div class="icon">
                                  <ion-icon name="logo-twitter"></ion-icon>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.facebook.com/" class="butn facebook" target="_blank">
                              <div class="icon">
                                  <ion-icon name="logo-facebook"></ion-icon>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.youtube.com/" class="butn youtube" target="_blank">
                              <div class="icon">
                                  <ion-icon name="logo-youtube"></ion-icon>
                              </div>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/" class="butn linkedin" target="_blank">
                              <div class="icon">
                                  <ion-icon name="logo-linkedin"></ion-icon>
                              </div>
                          </a>
                      </li>
                  </div>
                      <li class="bold">Baixe os aplicativos</li>

          </ul>

          <ul type="none">
              <li class="bold">Atendimento</li>
              <li>Horário de atendimento</li>
              <li>08:00 às 20:00 - <br>
                  Segunda a Sábado, <br>
                  horário de Brasília <br>
                  (Exceto domingo e feriados)</li>
              <li class="bold">Endereço</li>
              <li>RUA ARNALDO PINTO DA ROÇA, 6869 - <br>
                  1° andar - Centro <br>
                  CARPAZINHA/SR - CEP: 89234-881</li>
              <li class="bold">Email</li>
              <li>toolsreadycomercial@gmail.com</li>
          </ul>
      </div>
      <div class="marcaregistrada">
          <p>ToolsReady! É uma marca registrada de TOOLS READY  | CNPJ: 11.234.567/0001-90 | Todos os direitos reservados <br>
          <span>ESCOLA S SESI/SENAI</span></p>
      </div>
  </div>

  </footer>

    `;
  }
}

customElements.define("footer-template", Footer);
