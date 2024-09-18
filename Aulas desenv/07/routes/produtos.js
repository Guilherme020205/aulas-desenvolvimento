import express from "express"
import { listarProdutosControllers } from "../controllers/produtos.js"
const router = express.Router()

router.get('/produtos', listarProdutosControllers)

// exporta definições de rotas
export default router
