const removeDuplicates = require('./index')

describe('removeDuplicates', () => {
    test('remover duplicados de um array', () => {
        const input = [1, 2, 3, 4,4,5, 5]
        const resposta = [1, 2, 3, 4, 5]

        expect(removeDuplicates(input)).toEqual(resposta)
    })
})