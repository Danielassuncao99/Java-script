 // pop => remove no  final
 // shift=> remove no começo
 // push => adiciona no final
 // unshift => adiciona no inicio 
 //slice=> ele permite que voce escolha de onde quer começar atraves dos indices
 // split => ele serve para converter string em arrays e separando os nomes exemplo:  'Daniel' 'Assunção' 'de' 'oliveira'  
 // join => Ao contrario de split que separa o join server para juntar os nomes como uma string


 //                 0         1        2       3         4
/*const nomes  = ['daniel', 'maria', 'jhon', ' wallace', 'rosana'];
const novo =  nomes.slice(1,4)
console.log(novo)*/

//--------------------------------------------------
// converter string em um arrays

//const nome  =' Daniel Assunção de oliveira';
//const nomes  = nome.split(',  ')
const nomes = [  'Daniel', 'Assunção', 'de', 'oliveira' ];
const nome = nomes.join(' ');
console.log(nome);
