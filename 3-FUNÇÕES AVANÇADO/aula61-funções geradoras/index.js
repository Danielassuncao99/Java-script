// funções geradoras

//  Em resumo, yield é usado para pausar e retomar a execução, enquanto return finaliza a função geradora. Ambos têm usos específicos e complementares
function* geradora1(){
    //codigo qualquer
    yield 'valor 1 '
    // coddigo qualquer
    yield ' valor 2'
    // coddigo qualquer
    yield 'valor 3'
}
//const g1 = geradora1();
//console.log(g1.next().value);
//console.log(g1.next().value);
//console.log(g1.next().value);

//---------- outra forrma de exibir ------------
//const  g1 = geradora1();
//for (let valor of g1){
    //console.log(valor)
    //obs: o for ele sabe  quantos valores tem, diferente do ex1 que tem que digitar linha por linha
//}

//---------- outra forrma de exibir ------------
// esse é um tipo de geador infinito, diferente do primeiro que tem limites.

/*function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log(g2.next().value);*/
//--------------------------------------------------------

// continuando geradora com outra

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;

}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4();
for (let valor of g4)
    console.log(valor)
