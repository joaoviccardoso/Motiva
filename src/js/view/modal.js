export const modal = {
    mostrarDialogCerto(cor,titulo, texto){
        const dialog = document.getElementById("myDialog");

        dialog.innerHTML = `
                <img>
                <h2 class="avisoModal" style="color:#${cor}">${titulo}</h2>
                <p class="mensagemModal">${texto}</p>
                <button class="btn-modal" id="closeDialog" style="background:#${cor}">Fechar</button>
            `
        
            dialog.showModal();
            requestAnimationFrame(() => {
                dialog.style.opacity = "1";
                dialog.style.transform = "scale(1)";
            });
            document.getElementById("closeDialog").addEventListener("click", () => this.fecharDialog(dialog))
    },

    mostrarDialogTutorial(){
        const dialog = document.getElementById("myDialog");

        dialog.innerHTML = `
                <h2 class="avisoModal">Como usar o Expressa?</h2>
                <p class="mensagemModal">Aqui vai um mini tutorial:</p>
                <div class="container-tutorial-btn">
                    <span class="circulo-tutorial">
                        <img class="img-tutorial" src="./src/img/house 1.png" alt="Ícone de Início">
                    </span>
                    <p>Home: Leva você de volta à tela inicial para visualizar mensagens e navegar por categorias.</p>
                </div>

                <div class="container-tutorial-btn">
                    <span class="circulo-tutorial">
                        <img class="img-tutorial" src="./src/img/note 1.png" alt="Ícone para cadastrar mensagem">
                    </span>
                    <p>Cadastrar mensagem: Aqui você pode escrever e publicar sua própria mensagem para o mural.</p>
                </div>

                <div class="container-tutorial-btn">
                    <span class="circulo-tutorial">
                        <img class="img-tutorial" src="./src/img/eyedropper 1.png" alt="Ícone de tema">
                    </span>
                    <p>Paleta de cores: Personalize o visual do app escolhendo a cor que mais combina com você.</p>
                </div>

                <div class="container-tutorial-btn">
                    <span class="circulo-tutorial">
                        <img class="img-tutorial-2" src="./src/img/Vector.png" alt="Ícone sobre o projeto">
                    </span>
                    <p>Sobre: Veja mais informações sobre o projeto e a proposta do Motiva.</p>
                </div>
                
                <div>
                    <button class="btn-ignorar" id="closeDialog" >Fechar</button>
                </div>    
            `
        
            dialog.showModal();
            requestAnimationFrame(() => {
                dialog.style.opacity = "1";
                dialog.style.transform = "scale(1)";
            });
            document.getElementById("closeDialog").addEventListener("click", () => this.fecharDialogTutorial(dialog))
    },

    fecharDialog(dialog){
        dialog.style.opacity = "0";
        dialog.style.transform = "scale(0.8)";
        
        // Espera a animação antes de fechar de fato
        setTimeout(() => {
            dialog.close();
            location.reload();
        }, 300);
    },

    fecharDialogTutorial(dialog){
        const ignorarTutorial = dialog.id;
        localStorage.setItem("tutorial", ignorarTutorial);
        dialog.style.opacity = "0";
        dialog.style.transform = "scale(0.8)";

        setTimeout(() => {
            dialog.close();
        }, 300);
    }
}
