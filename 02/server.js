// Importa o módulo 'http' que permite criar um servidor HTTP.
const http = require('http');

// Cria uma lista de objetos representando partidas de futebol, 
// cada objeto tem um 'id' e o nome da 'partida'.
const partidas = [
    { id: 1, partida: "gremio x inter" },
    { id: 2, partida: "flamengo x vasco" },
    { id: 3, partida: "inter x avai" },
    { id: 4, partida: "flamengo x gremio" },
    { id: 5, partida: "real madrid x gremio" },
    { id: 6, partida: "barcelona x inter" }
]

// Cria o servidor HTTP usando a função createServer do módulo 'http'.
// Esta função recebe um callback que será executado a cada requisição feita ao servidor.
const servidor = http.createServer((req, res) => {
    // Obtém a URL da requisição.
    const url = req.url

    // Usando uma estrutura switch para tratar as diferentes URLs que podem ser acessadas.
    switch (req.url) {

        // Caso a URL seja '/partidas', retorna todas as partidas.
        case '/partidas':
            // Define o código de status HTTP como 200 (OK).
            res.writeHead(200)
            // Envia a resposta com o conteúdo das partidas convertidas em JSON.
            res.end(JSON.stringify({ nomeTime: [partidas] }))
            break;

        // Caso a URL não seja '/partidas', procura por partidas que contenham 
        // o nome do time passado na URL.
        default:
            // Remove as barras '/' da URL para extrair o nome do time.
            const nomeDoFilme = url.replaceAll('/', '')
            // Filtra a lista de partidas para encontrar aquelas que contém o nome do time.
            const partidasDoTime = partidas.filter(item => item.partida.includes(nomeDoFilme))

            // Se encontrar partidas correspondentes, retorna essas partidas.
            if (partidasDoTime.length > 0) {
                // Define o código de status HTTP como 200 (OK).
                res.writeHead(200);
                // Envia a resposta com as partidas correspondentes convertidas em JSON.
                res.end(JSON.stringify({ nomeTime: [partidasDoTime] }));
            } else {
                // Se não encontrar partidas, retorna uma mensagem de erro.
                // Define o código de status HTTP como 404 (Not Found).
                res.writeHead(404);
                // Envia a resposta com a mensagem de "Nenhuma partida futura".
                res.end(JSON.stringify({ nomeTime: ["Nenhuma partida futura"] }));
            }
    }

})

// Faz o servidor escutar na porta 3000 do 'localhost'.
// Quando o servidor iniciar, executa a função de callback que imprime "rodando" no console.
servidor.listen(3000, 'localhost', () => {
    console.log('rodando')
})
