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

    fecharDialog(dialog){
        dialog.style.opacity = "0";
        dialog.style.transform = "scale(0.8)";
        
        // Espera a animação antes de fechar de fato
        setTimeout(() => {
            dialog.close();
            location.reload();
        }, 300);
    }
}
