let usuarios = [];

class Usuario {
    constructor(name, email, birthDate, playlists = []) {
        this.name = name; 
        this.email = email; 
        this.birthDate = birthDate; 
        this.playlists = playlists; // Inicia vazia
    }
}

// Função para validar e-mail
function validacaoEmail(email) {
    const usuario = email.substring(0, email.indexOf("@"));
    const dominio = email.substring(email.indexOf("@") + 1);

    const emailValido =
        usuario.length >= 1 &&
        dominio.length >= 3 &&
        usuario.indexOf("@") === -1 &&
        dominio.indexOf("@") === -1 &&
        usuario.indexOf(" ") === -1 &&
        dominio.indexOf(" ") === -1 &&
        dominio.indexOf(".") !== -1 &&
        dominio.indexOf(".") >= 1 &&
        dominio.lastIndexOf(".") < dominio.length - 1;

    return emailValido;
}

// Função para adicionar usuário
function addUser(name, email, birthDate) {
    if (!name || !email) {
        console.log("Nome e e-mail são obrigatórios!");
        return;
    }

    if (!validacaoEmail(email)) {
        console.log("E-mail inválido");
        return;
    }

    const usuarioExistente = usuarios.find(user => user.name === name);

    if (usuarioExistente) {
        console.log("Nome de usuário já existe");
        return;
    }

    const novoUsuario = new Usuario(name, email, birthDate);
    usuarios.push(novoUsuario);
    console.log("Usuário adicionado com sucesso:", novoUsuario);
    return novoUsuario;
}
