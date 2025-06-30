class Form{
    constructor(){
        this.form = document.querySelector(".main-container-form")
    }

    pegarValores(){
        this.form.addEventListener("submit", (event) =>{
            event.preventDefault()
            const autor = document.querySelector("#autor");
            const texto = document.querySelector("#input-mensagem");
            const senha = document.querySelector("#senha");
            console.log(autor, texto, senha)
        })
    }
}

export default Form