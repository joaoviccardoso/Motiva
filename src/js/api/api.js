import { modal } from "../view/modal.js";

const apiMetodosHttp = {
    async getapi(){
        const res = await fetch("https://todo-listback.onrender.com/mensagem") 
        const resConvertida = await res.json()
        return resConvertida
    },

    async getapiPorId(id){
        const res = await fetch(`https://todo-listback.onrender.com/mensagem/${id}`) 
        const resConvertida = await res.json()
        return resConvertida
    },

    async postApi(dados){
        try {
            console.log(dados)
            const res = await fetch("https://todo-listback.onrender.com/mensagem",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(dados)
        })
        return await res.json()  
        } catch (error) {
            alert("Erro ao cadastrar dados")
            return
        }        
    },

    async putApi(id, dados){
        try {
            console.log(dados)
            const mensagem = await this.getapiPorId(id)
            
            if(mensagem.senha === dados.senha){
                const res = await fetch(`https://todo-listback.onrender.com/mensagem/${id}`,{
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(dados)
            });

            modal.mostrarDialogCerto("28a745", "Atualização realizada com sucesso!", "Muito obrigado por compartilhar sua mensagem.");
            return await res.json();

            }else{
                //erro de senha 
                modal.mostrarDialogCerto("d9534f", "Ops...", "Houve um erro para atualizar sua mensagem")
                return   
            }
        } catch (error) {
            alert("Erro ao editar dados")
            return
        }        
    },

    async atualizarLikes(id, dados){
        try {
            const resposta = await fetch(`https://todo-listback.onrender.com/mensagem/${id}/likes`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        });
        return await resposta.json();
        } catch (erro) {
            console.error("Erro na API de like:", erro);
            throw erro;
        }
    },

    async deleteApi(id){
        try {
            const res = await fetch(`https://todo-listback.onrender.com/mensagem/${id}`,{
                method: "DELETE"
            })
        } catch {
            alert("Erro ao deletar sua mensagem")
            return
        }
    }
}

export default apiMetodosHttp