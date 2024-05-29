const numero = Number (prompt('Digite um numero:'));//  antes /*let numero = prompt('Digite seu numero'); */aqui fez a conversao para soma, porque dentro de prompt sempre retorna como string na conta de somar
 
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p> Raiz quadrada ${numero ** 0.5}</p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p> Arredomdando para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Arredomdando para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> com duas casas decimais ${numero.toFixed(2)}</p>`;