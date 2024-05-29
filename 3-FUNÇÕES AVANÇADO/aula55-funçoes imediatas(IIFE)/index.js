// IIFE -> immediately invoked functions expression
(function(idade, peso, altura){
    const sobrenome = 'Assunção';
    function criaNome(nome){
        return nome + '' +sobrenome;
    }
    function falaNome (){
        console.log(criaNome('Daniel'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.70)