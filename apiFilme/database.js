// Conexão com o banco de dados
import pg from 'pg'

const conexao = new pg.Client("postgresql://guilherme:q3ZkVin2AltDRYa TzJ6Rgg@fan ged-phoenix-3150.j77.aws-us -east-1.cockroach labs.cloud:2 6257/defaultdb?sslmode=verify-full")


try {
    await conexao.connect()
    console.log('Banco de dados conectou')
} catch (erro) {
    console.log('Erro ao conectar no banco de dados')
    console.log(erro)
}

export default conexao 