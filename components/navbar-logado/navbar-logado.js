class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  <header>
        <nav>
          <div class="container">
          <input type="checkbox" id="checkbox-menu">
          <label for="checkbox-menu">
              <span></span>
              <span></span>
              <span></span>
              </label> 
          </div>
          <div id="divBusca" >
              <input type="text" id="txtBusca" placeholder="Pesquisar...">
              <button class="imgCarrinho"><img src="/Images/Carrinho.svg" alt="" id="carrinho"></button>
              <button class="imgFavoritos"><img src="/Images/Favoritos.svg"></button>
              <button class="imgConta"><img src="/Images/Conta.svg" id="imgTamanho"></button>
              <button class="imgPesquisa"><img src="/Images/Pesquisar.svg" id="pesquisa"></button>
          </div>  
        </nav>
      </header>
    `;
  }
}

customElements.define("navbar-2", Header);
