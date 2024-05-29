const numeros =[1,2,3,4,5,6,7,8,9];

for (let numero = 0; numero < numeros.length; numero++){
    

    if (numero === 2){
        console.log('pulei o numero 2');
        continue // ele pula e continua o laço
    }
    console.log(numero)


    if (numero === 7) {
        console.log('7 encontrado, saindo...') 
        break // ele encontra e encerra a execução
    }
}

