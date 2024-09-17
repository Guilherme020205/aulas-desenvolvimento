//Importando driver de conexão com Postgres
const pg = require("pg")
// Definindo a URL de conexão com o banco de dados
const database = new pg.Client({
    connectionString: "postgres://avnadmin:AVNS_hS_lMZyQo8 71HGlbBVS@pg-13e704b8-seemanngui lherme-7b74.c.aivencloud.com:17357/defaultdb",
    ssl: {
        rejectUnauthorized: false
    }
})

//Abrindo conexão com banco de dados
database.connect((erro) => {


    if (erro) {
        return console.log("Não foi possível se conectar com o ElephantSQL", erro)

    } else {

        return console.log("Conectado ao ElephantSQL!")
    }
})

// Exportando conexão para ser utilizada em outras partes do projeto

module.exports = database