// Inicialização do servidor
import express from 'express'
// Importar arquivo de rotas
import vagasRoutes from './routes/vagasRoutes.js'

const app = express()

// Permitir que a API receba JSON (substitui o body-parser)
app.use(express.json())
app.use(vagasRoutes)

app.listen(3000, () => console.log('Servidor rodando'))