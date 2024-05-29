const verdadeira = true;

// let tem scopo de bloco {...bloco}
// var so tem scopo de função

let nome = 'Daniel'; // criando
var nome2 = 'Assuncao';


if (verdadeira){
    let nome = 'otavio'; // criando
    var nome2 = 'rogerio' // redeclarando
 
    if(verdadeira) {
        var nome2 = 'miranda'; // redeclarando
        
        let nome = 'outra coisa';
        
    }


}
console.log(nome, nome2);