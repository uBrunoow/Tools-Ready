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
  display: flex;
  align-items: center;
  justify-content: center;
}

#divBusca{
  display: flex;
  background-color:white;
  border-radius:43px;
  width: 886.58px;
  height: 35px;
}

#txtBusca{
  
  background-color:transparent;
  padding-left:5px;
  font-style:italic;
  font-size:18px;
  border:none;
  height:32px;
  width:680px;
  margin-left: 25px;
}

#favoritos {
  width: 30px;
}

.imgBusca {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 45px;
  height: 35px;
  background: #B0B0B0;
  border-radius: 62px;
}

#pesquisa {
  width: 22px;
}

.imgConta {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 45px;
  height: 35px;
  background: #A0A0A0;
  border-radius: 62px;
}

#conta {

}

.imgFavoritos {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 45px;
  height: 35px;
  background: #8C8C8C;
  border-radius: 62px;
}

#favoritos {

}

.imgCarrinho {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 45px;
  height: 35px;
  background: #727272;
  border-radius: 62px;
}

#carrinho {

}

.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#checkbox-menu {
  position: absolute;
  opacity: 0;
}

label {
  cursor: pointer;
  position: relative;
  display: block;
  height: 22px;
  width: 35px;
}

label span {
  position: absolute;
  display: block;
  height: 5px;
  width: 100%;
  border-radius: 30px;
  background: #fff;
  transition: 0.25% ease-in-out;
}

  label span:nth-child(1){
    top: 0px;
  }

  label span:nth-child(2){
    top: 8px;
  }

  label span:nth-child(3){
    top: 16px;
  }

  #checkbox-menu:checked + label span:nth-child(1) {
  transform: rotate(-45deg);
  top: 8px;
  }

  #checkbox-menu:checked + label span:nth-child(2) {
    opacity: 0;
  }

  #checkbox-menu:checked + label span:nth-child(3) {
    transform: rotate(45deg);
    top: 8px;
  }
      </style>
  <header>
        <nav>
            <div class="container">
                <input type="checkbox" id="checkbox-menu">
                <label for="checkbox-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>               
            <div id="divBusca" >
                <input type="text" id="txtBusca" placeholder="Pesquisar...">
                <button class="imgBusca"><img src="./Images/Pesquisar.svg" alt="" id="pesquisa"></button>
                <button class="imgConta"><img src="./Images/Conta.svg" alt="" class="imagens" id="conta "></button>
                <button class="imgFavoritos"><img src="./Images/Favoritos.svg" alt="" class="imagens" id="favoritos"></button>
                <button class="imgCarrinho"><img src="./Images/Carrinho.svg" alt="" class="imagens" id="carrinho"></button>
            </div>
            </div>
        </nav>
      </header>
    `;
  }
}

customElements.define("navbar-2", Header);
