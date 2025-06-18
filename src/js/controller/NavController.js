import { FormView } from "../view/formView.js";
import { PaletaView } from "../view/paletaView.js";
import { SobreView } from "../view/sobreView.js";

export class NavController{
    constructor(){
        this.btnOpenPaleta = document.querySelector("#btn-open-paletaDeCor");
        this.btnOpenForm = document.querySelector("#btn-open-form");
        this.btnOpenSobre = document.querySelector("#btn-open-sobre");
    }

    garregarPaletaCor(){
        this.btnOpenPaleta.addEventListener("click", () =>{
            const view = new PaletaView()
            view.gerarPaleta()
        })
    }

    carregarForm(){
        this.btnOpenForm.addEventListener("click", () => {
            const view = new FormView()
            view.gerarForm()
        })
    }

    carregarSobre(){
        this.btnOpenSobre.addEventListener("click", () => {
            const view = new SobreView();
            view.gerarSobre();
        })
    }
}