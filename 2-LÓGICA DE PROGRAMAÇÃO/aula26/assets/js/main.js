const form = document.querySelector('#form'); // aqui pegou o formulario la do html

form.addEventListener('submit', function (e){
  e.preventDefault(); // evento de submit previnindo o defalt para que o não fosse enviado toda hora 
  const inputPeso = e.target.querySelector('#peso'); //aqui pegou os dados do input
  const inputAlura = e.target.querySelector('#altura');

  const peso =Number(inputPeso.value); // converteu os input para number
  const altura =Number(inputAlura.value);

  if (!peso){
    setResultado('Peso invalido', false);
    return;
  }

  if (!altura){
    setResultado('Altura invalido', false);
    return;
  }



  const imc = getImc(peso,altura); // criou uma função expecifica para calcular o imc
  const nivelImc = getNivelImc(imc); // aqui tambem é uma função expecifica para pegar o texto do rsultado, que chamamos de nivel 

  const msg = `Seu IMC é ${imc}  (${nivelImc}).`;

  setResultado(msg, true);

});


function getNivelImc(imc){
  const nivel = ['Abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1','obesidade grau 2','obesidade grau 3'];
//não precisa de "else" porque o  return ja para 
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc <18.5)   return nivel[0];
  

}
function getImc(peso,altura){
  const imc = peso / altura **2;
  return imc.toFixed(2);
}

function criaP(className){
  const p  = document.createElement('p');
  return p;
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML= '';

    
    const p = criaP();

    if(isValid) {
      p.classList.add('paragrafo-resultado');
    }else{
      p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}