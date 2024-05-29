function retornaFuncao(nome){
   
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao('daniel');
const funcao2 = retornaFuncao('otavio');
console.dir(funcao);   //console.log e console.dir é a mesma coisa não muda nada na hora de exibir.
console.dir(funcao2);

console.log(funcao(), funcao2());