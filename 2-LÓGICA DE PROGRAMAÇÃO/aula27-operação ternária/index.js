//oprerado ternario  ? :  (condição) ? 'valor para verdadeiro' :  'valor para falso';

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >=1000 ? 'Usuário VIP' : 'Usuario normal';
const corUsuario = null;
const corPadrao =  corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);





//-------------------------------------------
//const pontuacaoUsuario = 1000;

//if (pontuacaoUsuario >= 1000) {
    //console.log('usuário VIP');
//} else {
    //console.log('usuário normal');
//}
//-----------------------------------------------