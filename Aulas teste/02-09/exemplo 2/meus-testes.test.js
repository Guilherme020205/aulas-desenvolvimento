const isPalindrome = require('./index')

describe('isPalindrome', () => {
    test('Verifica se e um palindrome', () => {
          
        const input = "123521"
        const resposta = false


        expect(isPalindrome(input)).toEqual(resposta)
    })
})