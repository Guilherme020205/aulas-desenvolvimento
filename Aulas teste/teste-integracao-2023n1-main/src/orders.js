const orders = []

//funcao adicionar pedido
function addOrder(order){
    orders.push(order)
    return order
}

//encontrar pedido por id
function getOrder(id){
    return orders.find(order => order.id === id)
}

//excluir pedido
function deleteOrder(id){
    const index = orders.findIndex(order => order.id === id)
    if(index !== -1){
        return orders.splice(index, 1)[0]
    }
    return null
}

module.exports = {addOrder, getOrder, deleteOrder}