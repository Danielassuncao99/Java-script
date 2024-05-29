/*
if -> SE
ELSE-> SENAO
 */


/*
Entre 0 - 11 bom dia 
Entre 12 - 17 boa tarde
Entre 18 - 23 boa noite
*/




// IF pode ser utilizado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// So posso ter um else na checagem
/*
const hora = 12;

if (hora >=0 && hora <= 11){
    
    console.log('Bom dia');

} else if (hora >= 12 && hora <= 17){

    console.log('Boa tarde');

}else if (hora>=18 && hora <=23){
    console.log('Boa noite');
}else{
    console.log('Digite a hora correta! Entre 0 a 23.')
}*/


// Podemos usar condições sem else if, utilizando apenas if e else
const tenhoGrana = true;

if(tenhoGrana){
    console.log('vou sair de casa');
}else{
    console.log('Não vou sair de casa');
}


