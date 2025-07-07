import apiMetodosHttp from "../api/api.js";
import { FormView } from "../view/formView.js";
import senhaInput from "../view/inputSenha.js";
import { gerarMensagem } from "../view/mensagemView.js";
import { modal } from "../view/modal.js";
import Form from "./FormController.js";


class CarregarMensagem{
    constructor(){
        this.containerMensagens = document.querySelector("#container-mensagens");
        this.formView = new FormView();
        this.form = new Form();
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

    async pegarIdDosbtnsEhDeletar(btns){
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.containerMensagens.innerHTML = senhaInput.gerarInputDeConfirmacao();
                const btnConfirmar = document.querySelector("#btn-confirmar");
                const id = btn.dataset.id;

                btnConfirmar.addEventListener('click', async (event) =>{
                    event.preventDefault();
                    const senha = document.querySelector("#confirmarSenha").value;
                    const mensagem = await apiMetodosHttp.getapiPorId(id);
                
                    if(senha === mensagem.senha){
                        apiMetodosHttp.deleteApi(id)
                        modal.mostrarDialogCerto("28a745", "Tudo Certo", "Sua Mensagem foi Deletada com sucesso")
                    } else {
                        modal.mostrarDialogCerto("d9534f", "Ops...", "Houve um erro para deletar sua mensagem")
                    }
                })

                console.log(id)
            })
        })
    }

    pegarIdDosbtnsEhEditar(btns){
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                console.log(id)
                this.formView.gerarForm(id)
                this.form.atualizarMensagem(id)
            })
        })
    }
}
    
    


export default CarregarMensagem