let compras = [
    { id: 1, descricao: 'Playstation 5 PRO', preco: 699 },
    { id: 2, descricao: 'Camisa do Inter', preco: 100 },
    { id: 3, descricao: 'Dodge Charger', preco: 15000 }
]

exports.listar = (req, res) => {
    res.status(200).send(compras)
}

exports.cadastrar = (req, res) => {
    const novaCompra = req.body
    compras.push(novaCompra)
    res.status(201).send({ mensagem: 'Compra adicionada!' })
}

exports.valorTotal = (req, res) => {
    const valorTotal = compras.reduce((sum, compra) => sum + compra.preco, 0);
    res.status(200).send({ valorTotal })
}

exports.deletar = (req, res) => {
    const id = Number(req.params.id)
    compras = compras.filter((compra) => compra.id !== id)
    res.status(200).send(compras)
}