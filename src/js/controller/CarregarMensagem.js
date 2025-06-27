import getapi from "../api/api.js"

class CarregarMensagem{
    constructor(){
        this.containerMensagens = document.querySelector("#container-mensagens")
    }

    async CarregarTodasAsMensagens(){
        const mensagens = await getapi()
        console.log(mensagens[0])

        mensagens.forEach(mensagem => {
            this.containerMensagens.innerHTML += `
                <div class="main-container-mensagemCriada">
                    <div class="main-container-texto">
                        <p class="mensagemCriada">${mensagem.mensagem}</p>
                    </div>

                    <div class="main-container-informacoes">
                        <div class="main-container-autoEhCategoria">
                            <h3 class="autor">${mensagem.autor}</h3>
                        </div>

                        <div class="main-container-botoes">
                            <button id="like" class="main-btn-mensagem"><img src="./src/img/coracao.png" alt="Curtir"></button>
                            <p class="contadorDeLike">0</p>
                            <button id="lixeira" class="main-btn-mensagem"><img src="./src/img/trash 12.png" alt="Excluir"></button>
                            <button id="editar" class="main-btn-mensagem"><img src="./src/img/Vector (1).png" alt="Editar"></button>
                        </div>
                    </div>
                </div>
            `
        });

    }
}
    
    


export default CarregarMensagem