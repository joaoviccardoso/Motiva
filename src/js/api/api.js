async function getapi(){
    const res = await fetch("https://todo-listback.onrender.com/mensagem") 
    const resConvertida = await res.json()
    return resConvertida
}

export default getapi