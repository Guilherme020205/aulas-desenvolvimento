import express from 'express'
const router = express.Router()
// Importar controller
import { listarFilmes, atualizarFilmes, cadastraFilmes, listarFilmesCategoria, deletarFilmes  } from '../controllers/filme.js'

router.get('/filmes', listarFilmes)
router.get('/listarFilmesCategoria/:categoria', listarFilmesCategoria)
router.post('/cadastraFilmes', cadastraFilmes)
router.put('/atualizarFilmes/:nome', atualizarFilmes)
router.delete('/deletarFilmes/:nome', deletarFilmes) 

// Exportar definições de rotas
export default router