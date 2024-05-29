// função construtura -> objetos
// função fabrica-> objetos
// contrutora -> pessoa (new)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome, this.sobrenome + ': olá mundo');
        
    };
}

const p1 = new Pessoa ('Daniel', 'oliveira');
const p2 = new Pessoa ('dandan', 'dan')
p1.metodo()