const usuarios = [
    {
        nome: 'Matheus',
        email: 'matheus@qa.com'
    },
    {
        nome: 'Marcos',
        email: 'marcos@qa.com'
    }, 
    {
        nome: 'Lucas',
        email: 'lucas@qa.test'
    },
    { 
        nome: 'João',
        email: 'joao@qa.test'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario)


}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}