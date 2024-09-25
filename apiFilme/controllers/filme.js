import database from '../database.js'

const listarFilmes = async (req, res) => {

    const resultado = await database.query('select * from filmes.public.filme')
    res.status(200).send(resultado)
}

const listarFilmesCategoria = async (req, res) => {

    const { categoria } = req.params; // Obtém a categoria do parâmetro da rota

    try {
        const resultado = await database.query('SELECT * FROM filmes.public.filme WHERE categoria = $1', [categoria]);
        res.status(200).send(resultado);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao listar filmes por categoria');
    }
}


const cadastraFilmes = async (req, res) => {
    const { nomeNOVO, categoriaNOVO } = req.body;

    try {
        const resultado = await database.query(
            'INSERT INTO filmes.public.filme (titulo, categoria) VALUES ($1, $2)',
            [nomeNOVO, categoriaNOVO]
        );
        res.status(200).send({ message: 'Filme cadastrado com sucesso', data: resultado });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao cadastrar filme' });
    }
};


const atualizarFilmes = async (req, res) => {
    const { nome } = req.params;
    const { nomeNOVO, categoriaNOVO } = req.body;

    const resultado = await database.query("UPDATE filmes.public.filme SET titulo=$2, categoria=$3 WHERE titulo = $1;", [nome, nomeNOVO, categoriaNOVO]);
    res.status(200).send(resultado)
}

const deletarFilmes = async (req, res) => {
    const { nome } = req.params;

    const resultado = await database.query("DELETE FROM filmes.public.filme WHERE titulo = $1;", [nome])
    res.status(200).send(resultado)
}

// Exportar diversas variaveis
export { listarFilmes, atualizarFilmes, cadastraFilmes, listarFilmesCategoria, deletarFilmes }