import conexao from './database.js';

(async () => {
    try {
        await conexao.sync({ force: true }); 
        console.log('Modelos sincronizados com o banco de dados.');

    } catch (error) {
        console.error('Erro ao sincronizar modelos:', error);
    } finally {
        await conexao.close();
    }
})();
