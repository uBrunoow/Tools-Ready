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
              <button class="imgPesquisa"> <a href=""> <ion-icon name="search-outline"></ion-icon></a></button>
              <button class="imgConta"> <a href=""><ion-icon name="person-outline"></ion-icon></a> </button>
              <button class="imgFavoritos"> <a href=""><ion-icon name="heart-outline"></ion-icon></a></button>
              <button class="imgCarrinho"> <a href=""><ion-icon name="cart-outline"></ion-icon></a> </button>
          </div>  
        </nav>
      </header>

    `;
  }
}

customElements.define("navbar-2", Header);
