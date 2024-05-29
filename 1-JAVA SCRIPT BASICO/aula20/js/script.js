function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []; 
    
    function recebeEventoForm (evento) {
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.Value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

    }
    
    form.addEventListener('submit',recebeEventoForm);
}
meuEscopo();

//explicação detalhada

//function meuEscopo () { ... }: Define uma função chamada "meuEscopo".

//const form = document.querySelector('.form');: Seleciona o formulário com a classe "form".

//const resultado = document.querySelector('.resultado');: Seleciona a div com a classe "resultado".

//const pessoas = [];: Declara um array vazio chamado "pessoas".

//function recebeEventoForm (evento) { ... }: Define uma função chamada "recebeEventoForm" para lidar com o evento de envio do formulário.

//evento.preventDefault();: Previne o comportamento padrão de enviar o formulário.

//const nome = form.querySelector('.nome');: Seleciona o campo de entrada com a classe "nome" dentro do formulário.

//const sobrenome = form.querySelector('.sobrenome');: Seleciona o campo de entrada com a classe "sobrenome" dentro do formulário.

//const peso = form.querySelector('.peso');: Seleciona o campo de entrada com a classe "peso" dentro do formulário.

//const altura = form.querySelector('.altura');: Seleciona o campo de entrada com a classe "altura" dentro do formulário.

//pessoas.push({ ... });: Adiciona um objeto com as informações de nome, sobrenome, peso e altura ao array "pessoas".

//console.log(pessoas);: Exibe o array "pessoas" no console do navegador.

//resultado.innerHTML += ...;: Adiciona HTML ao conteúdo da div "resultado" para exibir as informações inseridas no formulário.

//form.addEventListener('submit', recebeEventoForm);: Adiciona um ouvinte de evento para o evento de envio do formulário, que chama a função "recebeEventoForm" quando o formulário é enviado.


//Este código cria um formulário simples onde o usuário pode inserir seu nome, sobrenome, peso e altura. Quando o formulário é enviado, as informações são exibidas na página e registradas no console do navegador.

