// factory function (função de fabrica)
// contructor function ( função construtora)

function criaPessoa(nome, sobrenome, a, p) {
    return{
        nome,
        sobrenome,

        // getter
        get nomeCompleto() {
            return `${this.nome}  ${this.sobrenome}`;
        },

        // setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala (assunto = 'falando sobre nada'){
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,
        
        //getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('daniel', 'assunção', 1.70, 73);
console.log(p1)