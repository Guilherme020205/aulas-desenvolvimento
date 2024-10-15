// Importar o express, para utilizar o Router
import express from 'express';
import { 
    listarVagas, 
    adicionarVaga, 
    buscarVagaPorId, 
    atualizarVaga, 
    deletarVaga, 
    listarVagasPorCargo, 
    listarVagasPorCidade 
} from '../controllers/vagasController.js';

const router = express.Router();

// Definir as rotas
router.get('/vagas', listarVagas);
router.post('/vagas', adicionarVaga);
router.get('/vagas/:id', buscarVagaPorId);
router.put('/vagas/:id', atualizarVaga);
router.delete('/vagas/:id', deletarVaga);
router.get('/cargo/:cargo', listarVagasPorCargo);
router.get('/localizacao/:cidade', listarVagasPorCidade);

// Exportar o router pra importar no app
export default router;
