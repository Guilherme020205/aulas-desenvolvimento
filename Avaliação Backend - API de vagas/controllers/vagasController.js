// Importar a conexão do banco de dados
import { Vaga } from "../models/Vagas.js";

// Listar todas as vagas
const listarVagas = async (req, res) => {
    try {
        const resultado = await Vaga.findAll();
        res.status(200).send({ resultado });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

// Adicionar uma nova vaga
const adicionarVaga = async (req, res) => {
    try {
        const novaVaga = await Vaga.create(req.body);
        res.status(201).send(novaVaga);
    } catch (erro) {
        console.log(erro);
        res.status(400).send({ mensagem: 'Erro ao criar vaga' });
    }
};

// Buscar uma vaga pelo ID
const buscarVagaPorId = async (req, res) => {
    try {
        const vaga = await Vaga.findByPk(req.params.id);
        if (vaga) {
            res.status(200).send(vaga);
        } else {
            res.status(404).send({ mensagem: 'Vaga não encontrada' });
        }
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

// Atualizar uma vaga existente
const atualizarVaga = async (req, res) => {
    try {
        const [atualizado] = await Vaga.update(req.body, {
            where: { id: req.params.id }
        });
        if (atualizado) {
            const vagaAtualizada = await Vaga.findByPk(req.params.id);
            res.status(200).send(vagaAtualizada);
        } else {
            res.status(404).send({ mensagem: 'Vaga não encontrada' });
        }
    } catch (erro) {
        console.log(erro);
        res.status(400).send({ mensagem: 'Erro ao atualizar vaga' });
    }
};

// Deletar uma vaga
const deletarVaga = async (req, res) => {
    try {
        const deletado = await Vaga.destroy({
            where: { id: req.params.id }
        });
        if (deletado) {
            res.status(204).send();
        } else {
            res.status(404).send({ mensagem: 'Vaga não encontrada' });
        }
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

// Listar vagas por cargo
const listarVagasPorCargo = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({
            where: { cargo: req.params.cargo }
        });
        res.status(200).send({ resultado: vagas });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

// Listar vagas por cidade
const listarVagasPorCidade = async (req, res) => {
    try {
        const vagas = await Vaga.findAll({
            where: { cidade: req.params.cidade }
        });
        res.status(200).send({ resultado: vagas });
    } catch (erro) {
        console.log(erro);
        res.status(500).send({ mensagem: 'Erro interno' });
    }
};

// Exportar controllers para importar nas rotas
export { listarVagas, adicionarVaga, buscarVagaPorId, atualizarVaga, deletarVaga, listarVagasPorCargo, listarVagasPorCidade };
