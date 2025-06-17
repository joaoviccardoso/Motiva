import { PaletaView } from "../view/paletaView.js";

export class PaletaController{
    constructor(){
        this.view = new PaletaView("#container-mensagens");
        this.btn = document.querySelector("#btn-open-paletaDeCor");
    }

    garregarPaletaCor(){
        this.btn.addEventListener("click", () =>{
            this.view.gerarPaleta()
        })
    }
}