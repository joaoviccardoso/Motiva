import apiMetodosHttp from "../api/api.js";

class Form{
    constructor(){
        this.form = document.querySelector(".main-container-form")
    }

    pegarValores(){
        this.form.addEventListener("submit", (event) =>{
            event.preventDefault()
            const autor = document.querySelector("#autor").value;
            const mensagem = document.querySelector("#input-mensagem").value;
            const senha = document.querySelector("#senha").value;

            const dados = {
                autor,
                mensagem,
                senha,
            }

            apiMetodosHttp.postApi(dados)
        })
    }
}

export default Form