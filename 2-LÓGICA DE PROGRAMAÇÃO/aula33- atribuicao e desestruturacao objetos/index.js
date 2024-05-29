const pessoa = {
    nome: ' Daniel',
    sobrenome:'Assunção',
    idade: 24,
    endereço: {
        rua:'Av brasil',
        numero:800
    }
};

// Atribuição via desestruturação
const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto);