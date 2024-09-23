// Escreva um código que verifique se uma pessoa pode votar (idade >= 18) e se é obrigatória a votação (idade >= 18 e idade <= 70).

function podeVotar(idade) {
    if(idade >= 18 && idade <= 70){
        return ("Votação obrigatória")
    }else if( idade > 70) {
        return ("Opcional")
    }else{
        return ("Não pode")
    }
}
console.log(podeVotar(20))
