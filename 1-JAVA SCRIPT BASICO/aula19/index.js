/*primitivos(imutaveis) - string, number, boolean, undefined, null.
(bigint, symbol) - valores copiados

Referencia (mutável)- array, object, function - passados por referencia*/

const a = {
nome: 'daniel',
sobrenome: 'assuncao'
};
const b = a;
b.nome = 'dandan';
console.log(a);
console.log(b);
