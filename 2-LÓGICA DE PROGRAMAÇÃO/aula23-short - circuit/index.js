//  avaliação curto - circuito (short - circuit)

/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> 

FALSY
false
o
'' "" ``
null/ undefined
Nan
*/ 

function falaOi (){
    return 'oi';

}
const vaiExecutar = 'joaozinho';

console.log( vaiExecutar && falaOi());