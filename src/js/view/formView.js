export class FormView{
    constructor(container){
        this.container = document.querySelector(container);
    }

    gerarForm(){
        this.container.innerHTML = '';

        const form = document.createElement('form');
        form.classList.add("main-container-form", "form-animation-enter")
        form.innerHTML = `
                <fieldset>
                <div class="main-container-texto-form">
                    <legend class="main-titulo-form">Cadastrar ou Editar</legend>
                </div>
                <div class="main-container-input-form">
                    <label for="" class="main-label-form">Autor</label>
                    <input type="text" class="main-input-form">

                    <label for="" class="main-label-form">Mensagem</label>
                    <input type="text" class="main-input-form" id="input-mensagem">

                    <label for="" class="main-label-form">Senha para Editar</label>
                    <input type="text" class="main-input-form">
                </div>

                <div class="main-container-ul-categoria">
                    <h4 class="main-categoria-titulo">Categorias</h4>
                    <ul class="main-ul-form">
                    <li class="main-li-form"><button class="main-btn-categoria">Autoestima</button></li>
                    <li class="main-li-form"><button class="main-btn-categoria">Superação</button></li>
                    <li class="main-li-form"><button class="main-btn-categoria">Trabalho e Carreira</button></li>
                    <li class="main-li-form"><button class="main-btn-categoria">Aprendizado</button></li>
                    <li class="main-li-form"><button class="main-btn-categoria">Saúde Mental</button></li>
                    <li class="main-li-form"><button class="main-btn-categoria">Gratidão</button></li>
                    </ul>
                </div>
                </fieldset>
            `;

            this.container.appendChild(form)

            requestAnimationFrame(() => {
                form.classList.add('form-animation-enter-active');
            });
        }   
}