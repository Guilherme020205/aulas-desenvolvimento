const http = require('http');
const host = 'localhost';
const port = 3000;

// 1° escutando as requisições 
// const requestListener = function (req, res){
//     res.writeHead(200)
//     res.end('Rodando')
// };

//Podemos modificar nosso servidor para suportar diferentes tipos de requisição:

const requestListener = function (req, res) {
    //definindo o tipo de dados com json
    res.setHeader('Content-Type', 'application/json')

    //tratando as possíveis requisições do cliente
    switch (req.url) {
        case '/partidas':
            res.writeHead(200);
            res.end(JSON.stringify({
                partidas: [
                    { id: 1, partida: "Grêmio x Inter" },
                    { id: 2, partida: "Flamengo x Vasco" },
                    { id: 3, partida: "inter x Avaí" },
                    { id: 4, partida: "Flamengo x Grêmio" },
                    { id: 5, partida: "Real Madrid x Grêmio" },
                    { id: 6, partida: "Barcelono x Inter" }
                ]
            }));
            break;
        case '/{node-do-time}':
            res.writeHead(200);
            res.end(JSON.stringify({ 
                partida_relacionada: [] 
            }));
            break;
        default:
            res.writeHead(404);
            res.end('Nada encontrado');
    }
}

// 2° Criando o servidor
const server = http.createServer(requestListener);

// 3° Iniciando o servidor
server.listen(port, host, () => {
    console.log(`Server disponível`)
});