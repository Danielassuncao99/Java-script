// objetos
const pessoa1 = {
    nome: 'Daniel',
    sobrenome: 'assunção',
    idade: 24,

    functionfala() {
        console.log(`Me chamo  ${this.nome} ${this.sobrenome} e minha  idade atual é de ${this.idade} anos.`); // a palavra THIS ela referenciar o objeto e qualquer atributo dentro dele.
    },

    incrementaIdade(){
        this.idade++;
    }
};
pessoa1.functionfala();
pessoa1.incrementaIdade();
pessoa1.functionfala();
pessoa1.incrementaIdade();
pessoa1.functionfala();
pessoa1.incrementaIdade();
pessoa1.functionfala();