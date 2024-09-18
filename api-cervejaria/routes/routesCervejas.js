const express = require('express')
const router = express.Router() 
const controller = require('../controllers/cervejasControllers')

// http://localhost:3000

router.get('/lista', controller.listar) // Lista geral 
router.get('/lista/nome/:nome', controller.listarPorNome) // Lista pelo nome digitado completo
router.get('/lista/nomeparcial/:nome', controller.listarPorParteDoNome) // Lista por parte do nome digitado
router.get('/lista/tipo/:tipo', controller.listarPorTipo) // Lista apenas os tipos escolhidos
router.get('/lista/nacionalidade/:nacionalidade', controller.listarPorNacionalidade) // Lista pela nacionalidade
router.get('/lista/ABV', controller.listarPorABV) // Lista pelo grau de teor alcoólico 👻kk


module.exports = router