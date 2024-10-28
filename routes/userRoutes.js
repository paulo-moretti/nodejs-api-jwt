// routes/userRoutes.js

const express = require('express');
const { registrarUsuario, autenticarUsuario } = require('../models/userModel');

const router = express.Router();

// Rota para registrar um novo usuário
router.post('/registrar', async (req, res) => {
    console.log('Tentando registrar usuário...'); // Log para verificar o funcionamento
    const { nome, email, senha } = req.body;
    try {
        const novoUsuario = await registrarUsuario(nome, email, senha);
        res.status(201).json({ mensagem: 'Usuário registrado com sucesso!', usuario: novoUsuario });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

// Rota para login de usuário
router.post('/login', async (req, res) => {
    console.log('Tentando login de usuário...'); // Log para verificar o funcionamento
    const { email, senha } = req.body;
    try {
        const usuario = await autenticarUsuario(email, senha);
        res.json({ mensagem: 'Login realizado com sucesso!', usuario });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

module.exports = router;
