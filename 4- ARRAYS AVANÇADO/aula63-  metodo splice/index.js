//               -5         -4       -3         -2       -1
//                0          1        2          3        4 
const nomes = ['Daniel', ' joao', 'eduardo', 'geovane' ,'dan']

/*nomes.splice(indice, delete, elem1, eleme2, elem3);
// pop
const removidos = nomes.splice(-1 , 1) 
console.log(nomes, removidos);
*/
//---------------------------------------------------------------
/*
nomes.splice(indice, delete, elem1, eleme2, elem3);
shift
const removidos =  nomes.splice(0, 1);
console.log(nomes, removidos);
*/

//-----------------------------------------------------------------
//nomes.splice(indice, delete, elem1, eleme2, elem3);
//push
/*nomes.splice(nomes.length, 0, 'Luiz')
console.log(nomes)
*/
//nomes.splice(indice, delete, elem1, eleme2, elem3);
//unshift
nomes.splice(0,0, 'luiz')
console.log(nomes)



