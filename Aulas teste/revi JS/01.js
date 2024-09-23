// Escreva um código que verifique se uma pessoa pode votar (idade >= 18) e se é obrigatória a votação (idade >= 18 e idade <= 70).

function podeVotar(idade) {
    const podeVotar = idade >= 18;
    const votoObrigatorio = idade >= 18 && idade <= 70;
    
    console.log(`Pode votar: ${podeVotar}`);
    console.log(`Voto obrigatório: ${votoObrigatorio}`);
}
podeVotar(20);
