export class PaletaView{
    constructor(){
        this.view = document.querySelector("#container-mensagens")
        this.body = document.querySelector("body")
        this.main = document.querySelector(".main")
        this.nav = document.querySelector(".header-nav")
        this.banner = document.querySelector(".main-container-novaMensagem")
        this.btnPesquisa = document.querySelector(".main-btn-pesquisa")
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
            <button class="btn-paleta" id="temaRoxo">
              <div class="bolinha-cor btn-roxo"></div>
              <p class="texto-cor">Roxo</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta" id="temaAmarelo">
              <div class="bolinha-cor btn-amarelo"></div>
              <p class="texto-cor">Amarelo</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta" id="temaVermelho">
              <div class="bolinha-cor btn-vermelho"></div>
              <p class="texto-cor">Vermelho</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta" id="temaVerde">
              <div class="bolinha-cor btn-verde"></div>
              <p class="texto-cor">Verde</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta" id="temaRosa">
              <div class="bolinha-cor btn-rosa"></div>
              <p class="texto-cor">Rosa</p>
            </button>
          </li>
          <li>
            <button class="btn-paleta" id="temaAzul">
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

        const btnMudarCor = document.querySelectorAll(".btn-paleta");
        btnMudarCor.forEach((btn) =>{
            btn.addEventListener("click", () =>{
              const idDoBtn = btn.id;
              this.mudarCorTema(idDoBtn)
            })
        })

        const btnFecharPateta = document.querySelector(".fecharOverlay")
        btnFecharPateta.addEventListener("click", () => {
            this.fecharOverLay()
        })
    }

    mudarCorTema(id){
      this.body.classList.remove("roxo-model", "amarelo-model", "vermelho-model", "verde-model", "azul-model", "rosa-model");
      this.nav.classList.remove("roxo-model", "amarelo-model", "vermelho-model", "verde-model", "azul-model", "rosa-model");
      this.main.classList.remove("roxo-model", "amarelo-model", "vermelho-model", "verde-model", "azul-model", "rosa-model");
      this.banner.classList.remove("roxo-model", "amarelo-model", "vermelho-model", "verde-model", "azul-model", "rosa-model");
      this.btnPesquisa.classList.remove("roxo-model", "amarelo-model", "vermelho-model", "verde-model", "azul-model", "rosa-model");

      switch(id){
        case "temaRoxo":
          this.body.classList.add("roxo-model");
          this.nav.classList.add("roxo-model");
          this.main.classList.add("roxo-model");
          this.banner.classList.add("roxo-model");
          this.btnPesquisa.classList.add("roxo-model");
          localStorage.setItem("tema", id);
          this.fecharOverLay()
          break
        case "temaAmarelo":
          this.body.classList.add("amarelo-model");
          this.nav.classList.add("amarelo-model");
          this.main.classList.add("amarelo-model");
          this.banner.classList.add("amarelo-model");
          this.btnPesquisa.classList.add("amarelo-model");
          localStorage.setItem("tema", id);
          this.fecharOverLay()
          break
        case "temaVermelho":
          this.body.classList.add("vermelho-model");
          this.nav.classList.add("vermelho-model");
          this.main.classList.add("vermelho-model");
          this.banner.classList.add("vermelho-model");
          this.btnPesquisa.classList.add("vermelho-model");
          localStorage.setItem("tema", id);
          this.fecharOverLay()
          break
        case "temaVerde":
          this.body.classList.add("verde-model");
          this.nav.classList.add("verde-model");
          this.main.classList.add("verde-model");
          this.banner.classList.add("verde-model");
          this.btnPesquisa.classList.add("verde-model");
          localStorage.setItem("tema", id);
          this.fecharOverLay()
          break
        case "temaRosa":
          this.body.classList.add("rosa-model");
          this.nav.classList.add("rosa-model");
          this.main.classList.add("rosa-model");
          this.banner.classList.add("rosa-model");
          this.btnPesquisa.classList.add("rosa-model");
          localStorage.setItem("tema", id);
          this.fecharOverLay()
          break
        case "temaAzul":
          this.body.classList.add("azul-model");
          this.nav.classList.add("azul-model");
          this.main.classList.add("azul-model");
          this.banner.classList.add("azul-model");
          this.btnPesquisa.classList.add("azul-model");
          localStorage.setItem("tema", id);
          this.fecharOverLay()
          break
      }
    }

    fecharOverLay(){
      const overlay = document.querySelector(".fundoEscuro");
      if(overlay === null){
        return
      }
      overlay.remove();
    }
}