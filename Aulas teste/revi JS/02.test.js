const { soma } = require('./02.js');

test('soma 1 + 2', () => {
    expect(soma(1,2)).toBe(3)
})