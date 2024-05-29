// argumentos que sustenta todos os argumentos enviados
//obs: aqui esta explicando que mesmo que chamou a função la em baixo com parametros e não colocou dentro, o 
// js armazena esses argumentos.

function funcao(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log (total);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//--------------------------------------------------------------------------------------------------
const conta = (... args)=>{ // se tirar esses 3 pontos antes do args(arguments) ele vai retornar so o sinal de + 
    console.log(args);

};
conta('+', 1, 20, 30, 40, 50);