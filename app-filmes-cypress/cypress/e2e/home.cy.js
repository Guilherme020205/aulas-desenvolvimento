describe('Função de busca de filmes', () => {

    it('deve retornar o filme digitado pelo usuário', () => {
        cy.visit('http://localhost:5173/')
        cy.get('input').type('Harry Potter')
        cy.get('button').click()
        cy.get('p').contains('Harry Potter and the Deathly Hallows: Part 2')
    })

})