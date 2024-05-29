// FOR- classico estrutura de repetição
 
//-------------------------------------------
// incrementar-> i++   adiciona de um em um
// decrementar-> i-=    tira de um em um ou de 10 em 10 depende do valor
// incrementando qualquer valor-> i += 5 adiciona de 5 em 5 depende do valor que colocar.
// 
//-------------------------------------------

// console.log ('linha 0');
// console.log ('linha 1');
// console.log ('linha 2');
// console.log ('linha 3');
// console.log ('linha 4');
// console.log ('linha 5');

// -----------------Exemplo 1 ---------------------------------
/*
for (let i = 0; i <=50; i++) { // esse i++ é um incremento de 1 em 1 vai adicionando automaticamente.  Se quiser ir adicionando de 10 em 10  é so colocar  i += 10 .  se quiser decrementar -=10
    console.log(`linha ${i}`); //  o 'i' é o que chamamos de controle da repetição

}
*/
//-----------------------------------------------------------

//--------------Exemplo 2 -----------------------------------

// .length -> é uma propriedade de arrays que retorna o número de elementos no array. No código, frutas.length retorna o número total de elementos no array frutas.

const frutas  = ['maça', 'banana', 'melancia', 'pera', 'morango'];

for (let i = 0; i < frutas.length; i++ ) {
    console.log(`${i}`, frutas[i]);
}

