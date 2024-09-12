let herois = [
    { id: 1, nome: 'Batman', pontosDeAtaque: 699 }
]

let viloes = [
    { id: 1, nome: 'Coringa', pontosDeAtaque: 245 }
]

exports.listarHerois = (req, res) => {
    res.status(200).send(herois)
}

exports.cadHeroi = (req, res) => {
    const novoHeroi = req.body
    herois.push(novoHeroi)
    res.status(201).send({ mensagem: 'Adicionado!' })
}

exports.listarViloes = (req, res) => {
    res.status(200).send(viloes)
}

exports.cadVilao = (req, res) => {
    const novoVilao = req.body
    viloes.push(novoVilao)
    res.status(201).send({ mensagem: 'Adicionado!' })
}
 
    exports.batalha = (req, res) => {

        const idHeroi = parseInt(req.params.idHeroi, 10);
        const idVilao = parseInt(req.params.idVilao, 10);
      
        const heroi = herois.find(h => h.id === idHeroi);
        const vilao = viloes.find(v => v.id === idVilao);
      
        if (heroi.pontosDeAtaque > vilao.pontosDeAtaque) {
    
           return res.status(201).send({ mensagem: `${heroi.nome} é o campeão!` });
           
        } else if (vilao.pontosDeAtaque > heroi.pontosDeAtaque) {
    
            return res.status(201).send({ mensagem: `${vilao.nome} é o campeão!` });
    
        } else {
    
            return res.status(201).send({ mensagem: 'Empate! Ambos têm o mesmo número de pontos de ataque.' });
        }
      };
