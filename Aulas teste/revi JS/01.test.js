const { podeVotar } = require('./01.js');

test('Votação obrigatória', () => {
    expect(podeVotar(30)).toBe('Votação obrigatória')
})

test('Votação obrigatória', () => {
    expect(podeVotar(80)).toBe('Opcional')
})

test('Não pode', () => {
    expect(podeVotar(10)).toBe('Não pode')
})