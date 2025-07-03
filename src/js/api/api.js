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