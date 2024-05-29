/*Daniel assuncao tem 24 anos, pesa 73kg 
tem 1.8 de altura e seu imc é de  25.2661611515 
daniel nasceu em 1999*/ 
const nome = 'Daniel ';
const sobrenome = 'Assunção';
const idade = 25;
const peso = 73;
const altura = 1.70;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2024 - idade;

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg `);
console.log(`tem ${altura} de altura e seu icm é de ${imc}`);
console.log(`${nome}nasceu em ${anoNascimento}`);

/*OBS: esse ${coloca as variaveis aqui dentro} junto com a crase é um template de string.*/