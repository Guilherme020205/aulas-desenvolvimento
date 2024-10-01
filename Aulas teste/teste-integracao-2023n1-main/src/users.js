//comecando com uma lista[array] vazia de usuarios
const users = []

//funcao para adicionar usuario
function addUser(user){
    users.push(user)
    return user
}

//encontrar um usuario pelo id
function getUser(id){
    return users.find(user => user.id === id)
}

//funcao excluir usuario
function deleteUser(id){
    const index = users.findIndex(user => user.id === id)
    //fazer verificação se o index nao for -1 = usuario nao encontrado
    //usar metodo splice, criar uma nova lista sem o elemento excluido
    if (index !== -1){
        return users.splice(index, 1)[0] 
    }
    //se o usuario nao foi encontrado, 
    //ele retorna null = nenhum usuario deletado
    return null
}

module.exports = {addUser, getUser, deleteUser}