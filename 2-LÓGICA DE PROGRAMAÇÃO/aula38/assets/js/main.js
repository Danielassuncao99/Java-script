let paragrafos = document.querySelector('.paragrafos');
let ps = paragrafos.querySelectorAll('p');

let estilosBody = getComputedStyle(document.body);
let backgroudColorBody = estilosBody.backgroudColor;
console.log(backgroudColorBody);

for (let p of ps) {
    p.style.backgroudColor = backgroudColorBody;
    p.style.color = 'blue'
}