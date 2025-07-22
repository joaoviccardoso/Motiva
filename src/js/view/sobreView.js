export class SobreView{
    constructor(){
        this.view = document.querySelector("#container-mensagens")
    }

    gerarSobre(){
        this.view.innerHTML = '';

        const sectionSobre = document.createElement("div");
        sectionSobre.classList.add("container-sobre", "form-animation-enter");
        sectionSobre.innerHTML = `
            <div class="container-sobre-titulo">
                <h4>Por que criamos o site Expressa?</h4>
            </div> 
            <div class="container-sobre-texto">
                <p>O Expressa nasceu da vontade de criar um espaço onde qualquer pessoa pudesse soltar a criatividade, expressar seus sentimentos ou simplesmente compartilhar uma boa frase — seja ela engraçada, inspiradora, curiosa ou até mesmo provocativa.</p>

                <p>Vivemos em tempos acelerados, onde às vezes falta um lugar para desabafar, rir ou refletir. Pensando nisso, criamos uma plataforma leve e acessível, onde o conteúdo é feito por pessoas reais, com ideias autênticas e muita personalidade.</p>

                <p>No Expressa, você tem liberdade para ser você. Aqui, cada mensagem conta e pode tocar alguém do outro lado da tela. Seja para arrancar risos, levantar o astral ou provocar aquele pensamento, o Expressa é um palco aberto para sua voz.</p>
            </div>
        `

        this.view.appendChild(sectionSobre);

        requestAnimationFrame(() => {
                sectionSobre.classList.add('form-animation-enter-active');
            });
        }   
}