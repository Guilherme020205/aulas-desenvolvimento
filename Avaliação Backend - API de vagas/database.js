import { Sequelize } from 'sequelize';

const conexao = new Sequelize('postgresql://guilherme:q3ZkVin2AltDRYaTzJ6Rgg@fanged-phoenix-3150.j77.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full');

try {
    await conexao.authenticate();
    console.log('Conectado com sucesso');
} catch (error) {
    console.error('Erro ao conectar', error);
}

export default conexao;
