import Form from "../controller/FormController.js";

export class FormView{
    constructor(){
        this.view = document.querySelector("#container-mensagens")
    }

        gerarForm(id){
        this.view.innerHTML = '';

        const form = document.createElement('form');
        form.classList.add("main-container-form", "form-animation-enter")
        form.innerHTML = `
                <fieldset>
                <div class="main-container-texto-form">
                    <legend class="main-titulo-form">Cadastrar ou Editar</legend>
                </div>
                <div class="main-container-input-form">
                    <label for="" class="main-label-form">Autor</label>
                    <input type="text" class="main-input-form" id="autor" required>

                    <label class="main-label-form" for="mensagem">Mensagem:</label>
                    <textarea class="main-input-form" id="input-mensagem" name="mensagem" rows="5" cols="40" placeholder="Escreva sua mensagem aqui..." required></textarea>

                    <label for="" class="main-label-form">Senha para Editar</label>
                    <input type="password" class="main-input-form" id="senha" required>

                    <label class="main-label-form">Categoria</label>
                    <select class="main-input-form" id="categoria">
                            <option class="texto-option" value="" disabled selected hidden>Escolha um Valor</option>
                            <option class="texto-option" value="motivacao">Motivação</option>
                            <option class="texto-option" value="humor">Humor</option>
                            <option class="texto-option" value="história">História</option>
                            <option class="texto-option" value="filosofia">Filosofia/Pensamentos</option>
                            <option class="texto-option" value="romance">Romance/Relacionamentos</option>
                            <option class="texto-option" value="misterio">Mistério</option>
                            <option class="texto-option" value="aleatorias">Aleatórias</option>
                    </select>
                    
                </div>

                <div class="main-div-salvarForm">
                    <button type="submit" class="main-btn-novaMensagem">Salvar</button>
                </div>
                </fieldset>
            `;

            this.view.appendChild(form)

            requestAnimationFrame(() => {
                form.classList.add('form-animation-enter-active');
            });

            setTimeout(() => {
                const formController = new Form();
                formController.pegarValores(id);
            }, 0);
        }   
}