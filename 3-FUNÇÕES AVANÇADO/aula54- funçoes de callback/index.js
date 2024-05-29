// funçoes de callback

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min; // math.random ele serve para gerar um numero aleatorio entre esses que foi proposto
    return Math.floor(num);
}

function f1 (callback){
        setTimeout(function(){
            console.log('f1');
            if(callback) callback();
        }, rand());
}

function f2 (callback){
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, rand());
}

function f3 (callback){
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, rand());
}







f1(f1callback);
function f1callback (){
    f2(f2callback)
}

function f2callback (){
    f3(f3callback)
}

function f3callback (){
    console.log('ola mundo');
}
