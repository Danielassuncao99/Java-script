
// for of -> ele é isado para pegar valor, diferente do for in que pega so o indice 
// for of-> ele não é interavel com objetos, so com array
//-------------
// for classico-> geralmente com interaveis (array ou strings)
// for in -> retorna o indice ou chave( string, arrays ou strings)
// for of -> retorna o valor em si ( iteraveis, arrays ou strings)

const nome = ["dabiel" ,"assuncao", "oliveira"]


for (let valor of nome){
    console.log( valor)

}
