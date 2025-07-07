import apiMetodosHttp from "../api/api.js";
import { modal } from "../view/modal.js";

class Form{
    constructor(){
        this.form = document.querySelector(".main-container-form");
    }

    pegarValores(idBtn){
        this.form.addEventListener("submit", (event) =>{
             event.preventDefault();

            const autor = document.querySelector("#autor").value;
            const mensagem = document.querySelector("#input-mensagem").value;
            const senha = document.querySelector("#senha").value;

            const camposValidos = this.verificacaoCamposMinimos(autor, mensagem, senha);
            if (!camposValidos) return;

            const dados = { autor, mensagem, senha };

            console.log("ID recebido:", idBtn);

            if (idBtn) {
                apiMetodosHttp.putApi(idBtn, dados); // Não esqueça de passar o id para a API
               
            } else {
                apiMetodosHttp.postApi(dados);
                modal.mostrarDialogCerto("28a745", "Cadastro realizado com sucesso!", "Muito obrigado por compartilhar sua mensagem.");
            }
        })
    }

    async atualizarMensagem(idBtn){
        const mensagemParaEditar = await apiMetodosHttp.getapiPorId(idBtn);
        console.log(mensagemParaEditar)
        document.querySelector("#autor").value = mensagemParaEditar.autor;
        document.querySelector("#input-mensagem").value = mensagemParaEditar.mensagem;
        this.pegarValores(idBtn)
    }

    verificacaoCamposMinimos(autor, mensagem, senha){
        if(autor.length <= 3 && mensagem.length <= 10 && senha.length <= 3){
            modal.mostrarDialogCerto(
                "Campos muito curtos",
                "Por favor, preencha os campos com mais informações:\n- Nome: mínimo 4 caracteres\n- Mensagem: mínimo 11 caracteres\n- Senha: mínimo 4 caracteres"
            )
            return false
        }
        return true
    }
}

export default Form