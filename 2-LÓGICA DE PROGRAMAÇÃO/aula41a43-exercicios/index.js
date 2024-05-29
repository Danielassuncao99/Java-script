// Escreva uma função que recebe 2 numeros e retorne o mair deles

function max(x,y){
    if (x > y){
        return x;
    }else{
        return y;
    }
}

console.log(max(10,15))

// outra forma simplificada
const max2 = (x, y) =>x > y ? x : y;
console.log(max2(10,16))


//----------------------------------
console.log('-------------------------------------------------------------')
//aula 42 
/*escreva uma funcção chamada ePaisagem que recebe dois argumaneto, largura e altura
de uma imagem (number).
Retorne tru se a imagem estiver no modo paisagem. */

const ePaisagem =  (largura, altura) => largura > altura;
console.log(ePaisagem(1080,1920));
//----------------------------------------------------------------------------------
console.log('-------------------------------------------------------')
/* aula 43 
Escreva uma função que recebe um numero e retorne o seguinte:
Número é divisivel por 3= fizz
Numero édivisivel por 5 = buzz
numero divisivel por 3 e 5  = retorne o proprio numero checar se o numero é realmente um numerp = retorna o proprio numero.
use a função com numero  de 0 a 100  */

function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3===0 && numero% 5=== 0) return 'FizzBuzz'
    if (numero % 3===0) return 'Fizz'
    if (numero % 5===0) return 'Buzz'
    return numero;

}
console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}