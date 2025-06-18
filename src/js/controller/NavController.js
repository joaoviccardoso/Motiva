import { FormView } from "../view/formView.js";
import { PaletaView } from "../view/paletaView.js";

export class NavController{
    constructor(){
        this.btnOpenPaleta = document.querySelector("#btn-open-paletaDeCor");
        this.btnOpenForm = document.querySelector("#btn-open-form")
    }

    garregarPaletaCor(){
        this.btnOpenPaleta.addEventListener("click", () =>{
            const view = new PaletaView(this.view)
            view.gerarPaleta()
        })
    }

    carregarForm(){
        this.btnOpenForm.addEventListener("click", () => {
            const view = new FormView(this.view)
            view.gerarForm()
        })
    }
}