export const gerarMensagem = {
    mensagemCriada(mensagem){
        return `
                <div class="main-container-mensagemCriada">
                    <div class="main-container-texto">
                        <p class="mensagemCriada">${mensagem.mensagem}</p>
                    </div>

                    <div class="main-container-informacoes">
                        <div class="main-container-autoEhCategoria">
                            <h3 class="autor">${mensagem.autor}</h3>
                            <p class="data">01/07/25</p>
                        </div>

                        <div class="main-container-botoes">
                            <button id="like-${mensagem._id}" class="main-btn-mensagem btn-likes"><img class="img-curtida" src="./src/img/coracao.png" alt="Curtir"></button>
                            <p class="contadorDeLike">${mensagem.likes}</p>
                            <button data-id="${mensagem._id}" class="main-btn-mensagem lixeira"><img src="./src/img/trash 12.png" alt="Excluir"></button>
                            <button data-id="${mensagem._id}" class="main-btn-mensagem editar"><img src="./src/img/Vector (1).png" alt="Editar"></button>
                        </div>
                    </div>
                </div>
            `
    }
}