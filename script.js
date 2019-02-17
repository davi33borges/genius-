let amarelo = document.querySelector('.amarelo');
let azul = document.querySelector('.azul');
let vermelho = document.querySelector('.vermelho');
let verde = document.querySelector('.verde');
let button = document.querySelector('.genius');
let ordemCores = [];
let comando = [];
let coresClique = [];
let i = 0;

let init = 0;
const iniciador = function() {
    init = 1;
    return init

}


function aleatorio (min, max) {
    return Math.floor (math.random()*(min, max)) + min;
}
// let aleatorio = function(min,max){
//     return number = Math.floor(Math.random() * max);

// }
const piscaAmarelo = function(){
    vermelho.classList.toggle("amareloJS");
    setTimeout(function(){vermelho.classList.toggle("amareloJS")},1000);

}
const piscaAzul = function(){
    verde.classList.toggle("azulJS");
    setTimeout(function(){verde.classList.toggle("azulJS")},1000);

}
const piscaVermelho = function(){
    amarelo.classList.toggle("vermelhoJS");
    setTimeout(function(){amarelo.classList.toggle("vermelhoJS")},1000);

}
const piscaVerde = function(){
    azul.classList.toggle("verdeJS");
    setTimeout(function(){azul.classList.toggle("verdeJS")},1000);

}
const declararCor = function(number){
    if(number && number >= 0){
        ordemCores.push("amareloJS");
        setTimeout(piscaVermelho()
        ,i*1000);
        console.log('amarelo');
    };
    if(1 > number && number >= 1){("azul");
        ordemCores.push("azulJS")
        setTimeout(piscaAzul()
        ,i*1000);
        console.log('azul')
    };
    if(2 > number && number >= 2){
        ordemCores.push("vermelhoJS")
        setTimeout(piscaAmarelo()
        ,i*1000);
        console.log('vermelho');
    };
    if(3 > number && number >= 3){
        ordemCores.push("verdeJS")
        setTimeout(piscaVerde()
        ,i*1000);
        console.log('verde');
    };
}
const cliqueAmarelo = function(){
    coresClique.push("amareloJS");
    setTimeout(piscaAmarelo()
        ,i*800);
}
 const cliqueAzul = function(){
    coresClique.push("azulJS");
    setTimeout(piscaAzul()
        ,i*800);
}
const cliqueVermelho = function(){
    coresClique.push("vermelhoJS");
    setTimeout(piscaVermelho()
        ,i*800);
}
const cliqueVerde = function(){
    coresClique.push("verdeJS");
    setTimeout(piscaVerde()
        ,i*800);
}
button.onclick = iniciador;

while(init>=1){
    if (init==1){
        aleatorio(0,3);
        declararCor();
        console.log(aleatorio);
        console.log(declararCor);
        setTimeout(function(){
            alert('clique na ordem para ir para a proxima rodada');
        },500);
        amarelo.onclick = cliqueAmarelo;
        azul.onclick = cliqueAzul;
        verde.onclick = cliqueVerde;
        vermelho.onclick = cliqueVermelho;
        if (ordemCores[i]==coresClique[i]){
            i++;
            init++;
        }
        else{
            alert('ERROU');
            init = 0;
            i=0;
        }
    }
    else if(i>=1){
        setTimeout(function(){
            aleatorio(0,3);
        },1000);
        declararCor();
        console.log(aleatorio);
        console.log(declararCor);
        setTimeout(function(){
            alert('clique na ordem para ir para a proxima rodada');
        },500);
        amarelo.onclick = cliqueAmarelo;
        azul.onclick = cliqueAzul;
        verde.onclick = cliqueVerde;
        vermelho.onclick = cliqueVermelho;
        if (ordemCores[i]==coresClique[i]){
            i++;
            init++;
        }
        else{
            alert('ERROU');
            init = 0;
            i=0;
        }

    }
}

