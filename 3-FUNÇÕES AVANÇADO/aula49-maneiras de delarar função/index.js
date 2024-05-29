// Declaração de função (functions hoisting)
// OBS: O FALA OI ELE PODE SER COLOCADO NO INICIO DO CODIGO OU NO FINAL QUE O I JS VAI ENTENDER
falaOi();
function falaOi(){
    console.log('ooooiiii')
}
//------------------------------------------------------------------------------------------------------------

//First-class objetcts ( objetos de primeira classe)
// function expression
const souUmDado = function() {
    console.log('sou um dado')
}
souUmDado();
//------------------------------------------------------------------------------------------------------------


//Arrow function
const funcaoArrow = () =>{
    console.log('sou um arrow');
}
funcaoArrow();