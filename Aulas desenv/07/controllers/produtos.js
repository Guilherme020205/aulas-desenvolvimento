import database from '../database.js'

const listarProdutosControllers = async (req, res) => {
    // Rodar um select na tabela produtos

    const resultado = await database.query('select * from produtos')

    res.status(200).send({mensagem: 'ok'})
}

export { listarProdutosControllers}