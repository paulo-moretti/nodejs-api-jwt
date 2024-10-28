const bcrypt = require('bcryptjs');

// Lista para armazenar usuários temporariamente
let usuarios = [];

// Função para registrar um novo usuário
const registrarUsuario = async (nome, email, senha) => {
    // Verificar se o e-mail já está registrado
    const usuarioExistente = usuarios.find(usuario => usuario.email === email);
    if (usuarioExistente) {
        throw new Error('E-mail já registrado.');
    }

    // Criptografar a senha antes de salvar
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    // Criar um novo usuário e adicionar à lista
    const novoUsuario = { nome, email, senha: senhaCriptografada };
    usuarios.push(novoUsuario);

    return novoUsuario;
};

// Função para autenticar usuário durante o login
const autenticarUsuario = async (email, senha) => {
    // Procurar o usuário pelo e-mail
    const usuario = usuarios.find(usuario => usuario.email === email);
    if (!usuario) {
        throw new Error('E-mail não encontrado.');
    }

    // Verificar se a senha está correta
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
        throw new Error('Senha incorreta.');
    }

    return usuario;
};

module.exports = {
    registrarUsuario,
    autenticarUsuario
};
