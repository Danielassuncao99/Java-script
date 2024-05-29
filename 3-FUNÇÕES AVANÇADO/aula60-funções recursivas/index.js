// funnções recursivas
// é simplesmente uma função que se chama de volta
// essa função tem um limite de rrepetições

function recursiva (max){

    
    console.log(max);
    if (max >= 500) return;
    max++;
    
    recursiva(max)
    
}
recursiva(0);