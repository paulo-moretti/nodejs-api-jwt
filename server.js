const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
app.use(express.json()); // Para processar JSON no corpo das requisições

// Rota inicial apenas para testar se o servidor está funcionando
app.get('/', (req, res) => {
    res.send('API de Autenticação JWT em Node.js funcionando!');
});

// Usar as rotas de usuário para registro e login
app.use('/api/usuarios', userRoutes);

// Configuração da porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
