import apiMetodosHttp from "../api/api.js";
import { FormView } from "../view/formView.js";
import senhaInput from "../view/inputSenha.js";
import { gerarMensagem } from "../view/mensagemView.js";
import { modal } from "../view/modal.js";
import Form from "./FormController.js";


class CarregarMensagem{
    constructor(){
        this.containerMensagens = document.querySelector("#container-mensagens");
        this.loader = document.querySelector("#loader");
        this.formView = new FormView();
        this.form = new Form();
    }

    async pegarTodasAsMensagens(){
        const mensagens = await apiMetodosHttp.getapi()
        this.CarregarTodasAsMensagens(mensagens)
    }

    async CarregarTodasAsMensagens(mensagens){
        this.loader.style.display = "block"
        this.containerMensagens.style.display = "none"

        if(!mensagens === ""){
            this.containerMensagens.innerHTML += "<h3>Nem uma Criada.</h3>"
            return
        }

        let arrayMensagena = '';
        mensagens.forEach(mensagem => {
            arrayMensagena += gerarMensagem.mensagemCriada(mensagem)
        });

        this.containerMensagens.innerHTML += arrayMensagena;

        this.containerMensagens.style.display = "flex"
        this.loader.style.display = "none"
        const btnsLixeira = document.querySelectorAll('.lixeira');
        const btnsEditar = document.querySelectorAll('.editar');
        const btnsLike = document.querySelectorAll(".btn-likes");
        
        this.pegarIdDosbtnsEhDeletar(btnsLixeira);
        this.pegarIdDosbtnsEhEditar(btnsEditar);
        this.curtirMensagem(btnsLike);
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

    curtirMensagem(btns){
        btns.forEach(btn => {
            btn.addEventListener('click', async () => {
                const id = btn.id.split("-")[1];
                btn.disabled = true;

                let likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
                const jaCurtiu = likedPosts.includes(id);
                
                try{
                    this.atualizarBtnLike(jaCurtiu, id)
                    const resposta = await apiMetodosHttp.atualizarLikes(id, {liked: !jaCurtiu});

                    if (jaCurtiu) {
                        likedPosts = likedPosts.filter(postId => postId !== id);
                    } else {
                        likedPosts.push(id);
                    }
                    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
                    const contador = btn.nextElementSibling; // <p class="contadorDeLike">
                    contador.textContent = resposta.likes;
                } catch{
                    modal.mostrarDialogCerto("d9534f", "Ops...", "Houve um erro para Curtir sua mensagem")
                } finally{
                    btn.disabled = false;
                }
            })
        })
    }

    atualizarBtnLike(jaCurtiu, id){
        const btnLikeCurtido = document.querySelector(`#like-${id}`);
        const img = btnLikeCurtido.querySelector("img");

        if(jaCurtiu){
            img.src = "./src/img/coracao.png",
            img.alt = "descurtir"
        } else{
            img.src = "src/img/VectorVermelho.png",
            img.alt = "curtir"
        }
    }


}
    
export default CarregarMensagem