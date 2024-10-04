// dados 
let eventos = [
    { id: 1, nome: "Show do Kiss em Floripa", local: "Florianópolis, SC", descricao: "Melhor show de eock de todos os tempos", preco: 500, foto: "https://fastcompanybrasil.com/wp-content/uploads/2023/12/Kiss_virtual_3-1024x1024.jpg" },
]


exports.cadastraEvento = (req, res) => {
    let novoEvento = req.body;

    // Função para gerar um novo ID disponível
    const gerarNovoId = () => {
        let novoId = 1;
        // Loop para garantir que o ID não existe na lista de eventos
        while (eventos.some(evento => evento.id === novoId)) {
            novoId++;
        }
        return novoId;
    };

    // Verifica se o ID já existe, se sim, gera um novo
    if (eventos.some(evento => evento.id === novoEvento.id)) {
        novoEvento.id = gerarNovoId();
    }

    eventos.push(novoEvento);
    res.status(200).send(eventos);
};

exports.listarEnventos = (req, res) => {

    res.status(200).send(eventos);
}

exports.detalhesEnvento = (req, res) => {
    const idEvento = Number(req.params.id)
    const evento = eventos.find(eventos => eventos.id === idEvento)
    res.status(200).send(evento) 
}
 