console.log("Roda esse console com node --watch nome_do_arquivo");

// importar um pacote
const fs = require('fs')
const readlineSync = require('readline-sync')

// /*Ler arquivo 
// fs.readFile('arquivo.txt', 'utf-8', (erro, dados) => {
//     if (erro) {     
//         console.log(erro)
//     } else {
//         console.log("Linha cima")
//         console.log(dados)
//     }   
// }) 


//Sincronizado ****
// const dados = fs.readFileSync('arquivo.txt', 'utf-8')
// console.log(dados)


//Ler arquivo */

// /*Edita arquivo

// fs.writeFile('arquivo2.txt', 'Dados do escreve aqui', () => {
//     console.log("Arquivo criado com sucesso")
// })

//Sincronizado ****
// fs.writeFileSync('arquivo2.txt', 'Dados do escreve aqui')

// Verifica existencia de arquivo
// const VerificaExistArquivo = fs.existsSync('arquivo.txt')

// if(VerificaExistArquivo){
//     console.log("Arquivo existe")
// }else{
//     console.log("Arquivo não existe")
// }

// Verifica existencia de arquivo
// fs.readdir('./', (erro, arquivos) => {
//     if (erro) {
//         console.log(`Deu erro -- ${erro}`)
//     } else {
//         console.log("Certo -- ", arquivos)
//     }
// })

// Criar pasta asyncrono
// fs.mkdirSync("nova pasta")

// Criar pasta
// fs.mkdir('pastanova2', (erro) => {
//     if (erro) {
//         console.log(`Deu erro -- ${erro}`)
//     }
// })

// Adiciona novo texto sem editar o antigo
// let data = fs.readFileSync('arquivo.txt', 'utf-8')

// data += '\nNovo texto'

// fs.writeFileSync('arquivo.txt', data)

// Pergunta 
const nomeUser = readlineSync.question("Qual o seu nome?")
console.log (nomeUser)

console.log("Linha baixo")

