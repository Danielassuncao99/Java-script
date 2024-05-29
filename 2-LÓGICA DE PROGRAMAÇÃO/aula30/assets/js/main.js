/*const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }

}


function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'fevereiro';
            return nomeMes;
        case 2:
            nomeMes = 'março';
            return nomeMes;
        case 3:
            nomeMes = 'abril';
            return nomeMes;
        case 4:
            nomeMes = 'maio';
            return nomeMes;
        case 5:
            nomeMes = 'junho';
            return nomeMes;
        case 6:
            nomeMes = 'julho';
            return nomeMes;
        case 7:
            nomeMes = 'agosto';
            return nomeMes;
        case 8:
            nomeMes = 'setembro';
            return nomeMes;
        case 9:
            nomeMes = 'outubro';
            return nomeMes;
        case 10:
            nomeMes = 'novembro';
            return nomeMes;
        case 11:
            nomeMes = 'dezembro';
            return nomeMes;



    }

}

function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} ${data.getHours()}: ${data.getMinutes()}`
    
    );
}
h1.innerHTML = criaData(data); 
*/

//---------------------------------------------------------
// outra maneira


//const h1 = document.querySelector('.container h1');
//const data = new Date();
//h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle:'full' });


// outra maneira
//-----------------------------------------------------------------------------------------------


const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const diasSemanaTexto = ['domingo', 'segunda', 'terça', 'quarta','quinta','sexta', 'sabado'];
    return diasSemanaTexto [diaSemana]

    

}

function getNomeMes(numeroMes) {
    const meses = ['janeiro' , 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];

}

function criaData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} ${data.getHours()}: ${data.getMinutes()}`
    
    );
}
h1.innerHTML = criaData(data); 