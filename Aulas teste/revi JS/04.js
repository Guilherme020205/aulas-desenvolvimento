// Função para verificar se a frase é uma proposição
var frase1 = "O céu é azul.";
var frase2 = "Abra a porta.";
var frase3 = "2 + 2 = 4.";
var frase4 = "Vamos ao cinema amanhã";

function verificarProposicao(sentenca) {
    
    if (sentenca.includes("=") || (sentenca.endsWith(".") && !sentenca.startsWith("Abra"))) {
        return true; 
    } else {
        return false; 
    }
}

console.log("Frase 1: " + verificarProposicao(frase1)); 
console.log("Frase 2: " + verificarProposicao(frase2)); 
console.log("Frase 3: " + verificarProposicao(frase3)); 
console.log("Frase 4: " + verificarProposicao(frase4)); 
