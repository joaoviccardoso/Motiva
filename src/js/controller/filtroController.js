import apiMetodosHttp from "../api/api.js";
import { gerarMensagem } from "../view/mensagemView.js";
import { modal } from "../view/modal.js";
import CarregarMensagem from "./CarregarMensagem.js";

class Filtros{
    constructor(){
        this.gerarMensagens = new CarregarMensagem()
        this.containerMensagens = document.querySelector("#container-mensagens");
        this.BtnPesquisar = document.querySelector("#btnPesquisar");
        this.btnFiltrar = document.querySelectorAll(".select-filtrarOrdernar")
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

            this.containerMensagens.innerHTML = "";
            this.gerarMensagens.CarregarTodasAsMensagens(mensagensFiltradas)
        })
    }

    filtrarPelosBtn(){
        this.btnFiltrar.forEach(btn =>{
            btn.addEventListener("change", () => {
                const id = btn.id
                const valor = btn.value
                console.log(id)
                if(id === "select-filtrar"){
                    this.filtroCategoria(valor)
                } else if (valor === "recentes"){
                    this.filtrarData()
                } else{
                    this.filtrarPorCurtidas()
                }
            })
        })
    }

    async filtroCategoria(valor){
            const mansagens = await apiMetodosHttp.getapi()
            const mensagensFiltradas = mansagens.filter(mensagem => {
                const categoria = mensagem.categoria.toLowerCase().includes(valor.toLowerCase())

                return categoria
            })

            if(mensagensFiltradas == ""){
                modal.mostrarDialogCerto(
                    "d9534f",
                    "Ops...",
                    "Nem uma mensagem encontrada."
                )
                return
            }

            this.containerMensagens.innerHTML = "";
            this.gerarMensagens.CarregarTodasAsMensagens(mensagensFiltradas)
    }

    async filtrarData(){
        const mansagens = await apiMetodosHttp.getapi()
        const mensagensOrdenadas = mansagens.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        this.containerMensagens.innerHTML = "";
        this.gerarMensagens.CarregarTodasAsMensagens(mensagensOrdenadas)
    }

    async filtrarPorCurtidas(){
        const mansagens = await apiMetodosHttp.getapi()
        const mensagensOrdenadas = mansagens.sort((a, b) => b.likes - a.likes);
        this.containerMensagens.innerHTML = "";
        this.gerarMensagens.CarregarTodasAsMensagens(mensagensOrdenadas)
    }

    mostrarMensagensFiltradas(mensagensFiltradas){
        this.containerMensagens.innerHTML = "";

        mensagensFiltradas.forEach(mensagem => {
            this.containerMensagens.innerHTML += gerarMensagem.mensagemCriada(mensagem)
        });
    }
}

export default Filtros