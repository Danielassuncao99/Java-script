// concatenação é basicamente uma forma de juntar dois ou mais elementos do tipo texto
/*
//exemplo 1
const num1 = [1,2,3]
const num2 = [4,5,6]
const resultado = num1.concat(num2, [7,8,9], 'luiz');
console.log(resultado)
*/
//exemplo 2
const num1 = [1,2,3];
const num2 = [4,5,6];
const resultado = [...num1, ...num2]
console.log(resultado)
