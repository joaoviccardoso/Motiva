import apiMetodosHttp from "../api/api.js";
import { gerarMensagem } from "../view/mensagemView.js";

class CarregarMensagem{
    constructor(){
        this.containerMensagens = document.querySelector("#container-mensagens")
    }

    async CarregarTodasAsMensagens(){
        const mensagens = await apiMetodosHttp.getapi()
        console.log(mensagens[0]._id)

        mensagens.forEach(mensagem => {
            this.containerMensagens.innerHTML += gerarMensagem.mensagemCriada(mensagem)
        });

        const btnsLixeira = document.querySelectorAll('.lixeira');
        const btnsEditar = document.querySelectorAll('.editar');
        this.pegarIdDosbtnsEhDeletar(btnsLixeira);
        this.pegarIdDosbtnsEhEditar(btnsEditar);
        
    }

    pegarIdDosbtnsEhDeletar(btns){
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                console.log(id)
            })
        })
    }

    pegarIdDosbtnsEhEditar(btns){
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                console.log(id)
            })
        })
    }
}
    
    


export default CarregarMensagem