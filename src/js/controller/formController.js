import { FormView } from "../view/formView.js";

export class FormController{
    constructor(){
        this.view = new FormView("#container-mensagens");
        this.btn = document.querySelector("#btn-open-form")
    }

    carregarForm(){
        this.btn.addEventListener("click", () => {
            this.view.gerarForm()
        })
    }
}