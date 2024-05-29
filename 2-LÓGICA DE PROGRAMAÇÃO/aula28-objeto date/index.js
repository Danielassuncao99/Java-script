function zeroEsqueda (num){
    return num>=10? num : `0${num}`;
}

function formataData(data){
    const dia = zeroEsqueda(data.getDate());
    const mes = zeroEsqueda(data.getMonth() + 1); // mês começa do zero por isso colocou +1 ali
    const ano = zeroEsqueda(data.getFullYear());
    const hora = zeroEsqueda(data.getHours());
    const min = zeroEsqueda(data.getMinutes());
    const seg = zeroEsqueda(data.getSeconds()); // 0 começa no domingo e 6 começa no sabado


    return`${dia}/${mes}/${ano}/  ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
