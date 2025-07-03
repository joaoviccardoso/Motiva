const senhaInput = {
    gerarInputDeConfirmacao(){
        return `
            <div class="confirmarSenha">
                <div>
                    <h3>Confirmar senha para deletar a mensagem</h3>
                </div>
                <input type="text" class="main-input-form" id="confirmarSenha" required>
                <div>
                    <button type="submit" id="btn-confirmar" class="main-btn-novaMensagem">Confirmar</button>
                </div>
            </div>
        `
    }
}

export default senhaInput