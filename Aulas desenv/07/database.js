import pg from 'pg'

const conecao = new pg.Client("postgres://avnadmin:AVNS_hS_lMZyQo871H GlbBVS@pg -13e704b8-seemannguilherme-7b74.c.aivencloud. com:17357/defaultdb")

try {
    await conecao.connect()
    console.log("Conectado")
} catch (erro){
    console.log(erro)
}

export default conecao