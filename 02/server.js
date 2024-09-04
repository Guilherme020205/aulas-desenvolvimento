const http = require('http');

const partidas = [
    { id: 1, partida: "gremio x inter" },
    { id: 2, partida: "flamengo x vasco" },
    { id: 3, partida: "inter x avai" },
    { id: 4, partida: "flamengo x gremio" },
    { id: 5, partida: "real madrid x gremio" },
    { id: 6, partida: "barcelona x inter" }
]

const servidor = http.createServer((req, res) => {
    // Conteudo server
    const url = req.url

    switch (req.url) {

        case '/partidas':
            res.writeHead(200)
            res.end(JSON.stringify({ nomeTime: [partidas] }))
            break;

        default:
            const nomeDoFilme = url.replaceAll('/', '')
            const partidasDoTime = partidas.filter(item => item.partida.includes(nomeDoFilme))

            if (partidasDoTime.length > 0) {
                res.writeHead(200);
                res.end(JSON.stringify({ nomeTime: [partidasDoTime] }));
            } else {
                res.writeHead(404);
                res.end(JSON.stringify({ nomeTime: ["Nenhuma partida futura"] }));
            }
    }

})

servidor.listen(3000, 'localhost', () => {
    console.log('rodando')
})