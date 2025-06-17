export class PaletaView{
    constructor(container){
        this.view = document.querySelector(container);
        this.body = document.querySelector(".mostrarFundoEscuro")
    }

    gerarPaleta(){
        this.view.innerHTML = '';

        const containerPaleta = document.createElement("div");
        containerPaleta.classList.add("container-paleta-cor", "form-animation-enter");
        containerPaleta.innerHTML = `
        <div class="container-titulo-paleta-cor">
          <h4>Color</h4>
          <button class="fecharOverlay">X</button>
        </div>

        <ul class="ul-paleta-cor">
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor"></div>
              <p class="texto-cor">Roxo</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor"></div>
              <p class="texto-cor">Amarelo</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor"></div>
              <p class="texto-cor">Vermelho</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor"></div>
              <p class="texto-cor">Verde</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor"></div>
              <p class="texto-cor">Rosa</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor"></div>
              <p class="texto-cor">Azul</p>
            </button>
          </li>
        </ul>
        `

        this.view.appendChild(containerPaleta);
        

        requestAnimationFrame(() => {
            containerPaleta.classList.add('form-animation-enter-active');
        });

        this.abrirOverLay()
       /* const btnFecharPateta = document.querySelector("fecharOverlay")
        btnFecharPateta.addEventListener("click", () => {
            this.fecharOverLay()
        })*/
    }

    abrirOverLay(){
        this.body.classList.add("mostrarFundo");
       
    }

    fecharOverLay(){
         this.body.classList.remove("mostrarFundo");
    }
}