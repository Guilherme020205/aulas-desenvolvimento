// dados 
let eventos = [
    {id: 1, nome: "Show do Kiss em Floripa", local: "Florianópolis, SC", descricao: "Melhor show de eock de todos os tempos", preco: 500, foto: "https://fastcompanybrasil.com/wp-content/uploads/2023/12/Kiss_virtual_3-1024x1024.jpg" }
]


exports.cadastraEvento = (req, res) => {
    res.status(200).send({mensagem: "cadastra"})
}

exports.listarEnventos = (req, res) => {
    const eventosSimplificados = eventos.map(evento => ({
        nome: evento.nome,
        foto: evento.foto
    }));
    res.status(200).send(eventosSimplificados);
}

exports.detalhesEnvento = (req, res) => {
    
    res.status(200).send()
}