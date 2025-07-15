import apiMetodosHttp from "../api/api.js";
import { gerarMensagem } from "../view/mensagemView.js";
import { modal } from "../view/modal.js";

class Filtros{
    constructor(){
        this.containerMensagens = document.querySelector("#container-mensagens");
        this.BtnPesquisar = document.querySelector("#btnPesquisar");
    }

    async filtrarPorBarraDePesquisa(){
        this.BtnPesquisar.addEventListener("click", async () =>{
            const valorPesquisa = document.querySelector("#barraDePesquisa").value;
            const mansagens = await apiMetodosHttp.getapi()
            const mensagensFiltradas = mansagens.filter(mensagem => {
                const autor = mensagem.autor.toLowerCase().includes(valorPesquisa.toLowerCase());
                const categoria = mensagem.categoria.toLowerCase().includes(valorPesquisa.toLowerCase());

                return autor || categoria
            })
            console.log(mensagensFiltradas)

            if(mensagensFiltradas == ""){
                modal.mostrarDialogCerto(
                    "d9534f",
                    "Ops...",
                    "Nem uma mensagem encontrada."
                )
                return
            }

            this.mostrarMensagensFiltradas(mensagensFiltradas)
        })
    }

    mostrarMensagensFiltradas(mensagensFiltradas){
        this.containerMensagens.innerHTML = "";

        mensagensFiltradas.forEach(mensagem => {
            this.containerMensagens.innerHTML += gerarMensagem.mensagemCriada(mensagem)
        });
    }
}

export default Filtros