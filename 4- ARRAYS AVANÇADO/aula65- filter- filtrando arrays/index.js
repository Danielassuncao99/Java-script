//filter=>  filtrar arrays - sempre retorna uum array, com a mesma quantidade de elementos ou menos.


// retorne os numeros maiores que 10
//               0   1   2  3  4  5  6  7  8  9   10  11  12
//const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados);


//-----------------outro exemplo--------------


// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo o nome retorne com a letra A
const pessoas  =[
    {nome: 'Daniel', idade: 62},
    {nome: 'wallace', idade: 23},
    {nome: 'Marisa', idade: 55},
    {nome: 'Ezequiel', idade: 19},
    {nome: 'jonas', idade: 35},
    {nome: 'matias', idade: 46},
];


const pessoasComLetraA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoasComLetraA)


//const pessoasVelhas = pessoas.filter(obj =>obj.idade > 50)
//console.log(pessoasVelhas)



//const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
//console.log(pessoasComNomeGrande);