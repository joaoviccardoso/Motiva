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
            const categoria = document.querySelector("#categoria").value
            const senha = document.querySelector("#senha").value;

            if(categoria === ""){
                modal.mostrarDialogCerto(
                    "d9534f",
                    "Escolha um campo",
                    "Por favor, preencha o campo com uma categoria"
                )
                return
            }

            const camposValidos = this.verificacaoCamposMinimos(autor, mensagem, senha);
            if (!camposValidos) return;

            const dados = { autor, mensagem, senha, categoria};

            console.log(dados)
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
        document.querySelector("#categoria").value = mensagemParaEditar.categoria;
        this.pegarValores(idBtn)
    }

    verificacaoCamposMinimos(autor, mensagem, senha, categoria){
        if(autor.length <= 3 && mensagem.length <= 10 && senha.length <= 3 && categoria === "escolha"){
            modal.mostrarDialogCerto(
                "d9534f",
                "Campos muito curtos",
                "Por favor, preencha os campos com mais informações:\n- Nome: mínimo 4 caracteres\n- Mensagem: mínimo 11 caracteres\n- Senha: mínimo 4 caracteres"
            )
            return false
        } 
        return true
    }
}

export default Form