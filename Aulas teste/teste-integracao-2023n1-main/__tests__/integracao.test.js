// import modulo 
const { addUser, getUser, deleteUser } = require('../src/users')
const { addOrder, getOrder, deleteOrder } = require('../src/orders')

// teste func add

describe('Testando a funcao adicionar pedidos e usuarios', () => {
    test('adicionar pedidos e usuarios', () => {
        const user = {
            id: 1,
            name: "Mateus"
        }

        const order = {
            id: 100,
            item: "paçoca",
            userId: 1
        }

        addUser(user)
        addOrder(order)

        const findUser = getUser(1)
        const findOrder = getOrder(100)

        expect(findUser).toEqual(user)
        expect(findOrder).toEqual(order)

        // verifica a integração

        expect(findOrder.userId).toBe(findUser.id)

    })

    test('testando a funcao excluir', () => {
        //add user e pedido
        const user = {
            id: 2,
            name: "Maria"
        }
        const order = {
            id: 150,
            item: "Calota",
            userId: 2
        }

        addUser(user)
        addOrder(order)
        
        // Deleta primeio o pedido, pois está vinculado ao user
        deleteOrder(150)
        deleteUser(2)

        // busca usuario e pedido na lista 

        const findUser = getUser(2)
        const findOrder = getOrder(150)

        // Valida se o resultado e undefined
        expect(findOrder).toBeUndefined();
        expect(findUser).toBeUndefined();

})

})
