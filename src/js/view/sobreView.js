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
                <h4>Por que criamos o site Motiva?</h4>
            </div> 
            <div class="container-sobre-texto">
                <p>O site Motiva nasceu com um propósito simples, mas poderoso: inspirar e motivar pessoas no seu dia a dia. Em meio à correria da rotina, é comum nos sentirmos desanimados ou sobrecarregados, e muitas vezes, uma simples mensagem positiva pode fazer toda a diferença.</p>

                <p>Pensando nisso, decidimos criar uma plataforma leve, acessível e acolhedora, onde qualquer pessoa possa encontrar palavras de incentivo, frases motivacionais e mensagens que tragam mais força e clareza para enfrentar os desafios da vida pessoal, acadêmica ou profissional.</p>

                <p>Nosso objetivo com o Motiva é oferecer um espaço seguro, que valoriza o bem-estar emocional e incentiva a autoconfiança, a persistência e a positividade. Seja para começar o dia com mais energia ou para recarregar as forças em momentos difíceis, o Motiva está aqui para lembrar que você é capaz.</p>
                
            </div>
        `

        this.view.appendChild(sectionSobre);

        requestAnimationFrame(() => {
                sectionSobre.classList.add('form-animation-enter-active');
            });
        }   
}