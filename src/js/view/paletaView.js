export class PaletaView{
    constructor(){
        this.view = document.querySelector("#container-mensagens")
        this.body = document.querySelector("body")
    }

    gerarPaleta(btn){
      
        const rect = btn.getBoundingClientRect();
        const containerPaleta = document.createElement("div");
        containerPaleta.classList.add("container-paleta-cor", "form-animation-enter");

        // posicionamento absoluto
        containerPaleta.style.position = "fixed";
        containerPaleta.style.top = `${rect.bottom + 8}px`; // 8px abaixo do botão
        containerPaleta.style.left = `${rect.left}px`;
        containerPaleta.style.zIndex = "1001";


        containerPaleta.innerHTML = `
        <div class="container-titulo-paleta-cor">
          <h4>Color</h4>
          <button class="fecharOverlay">X</button>
        </div>

        <ul class="ul-paleta-cor">
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor btn-roxo"></div>
              <p class="texto-cor">Roxo</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor btn-amarelo"></div>
              <p class="texto-cor">Amarelo</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor btn-vermelho"></div>
              <p class="texto-cor">Vermelho</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor btn-verde"></div>
              <p class="texto-cor">Verde</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor btn-rosa"></div>
              <p class="texto-cor">Rosa</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta">
              <div class="bolinha-cor btn-azul"></div>
              <p class="texto-cor">Azul</p>
            </button>
          </li>
        </ul>
        `

        const overlay = document.createElement("div");
        overlay.classList.add("fundoEscuro");
        this.view.appendChild(overlay);

        overlay.appendChild(containerPaleta);

        requestAnimationFrame(() => {
            containerPaleta.classList.add('form-animation-enter-active');
        });

        const btnFecharPateta = document.querySelector(".fecharOverlay")
        btnFecharPateta.addEventListener("click", () => {
            this.fecharOverLay()
        })
    }


    fecharOverLay(){
      const overlay = document.querySelector(".fundoEscuro");
      overlay.remove();
    }
}