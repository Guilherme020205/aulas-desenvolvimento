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
})
