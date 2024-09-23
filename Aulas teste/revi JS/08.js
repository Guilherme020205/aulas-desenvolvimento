// Função com Objeto Pessoa
function descreverPessoa(pessoa) {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`;
}
const pessoa = { nome: "João", idade: 25 };
console.log(descreverPessoa(pessoa));  
