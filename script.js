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
let aleatorio = function(min,max){
    return number = Math.floor(Math.random() * max);

}
const piscaVermelho = function(){
    vermelho.classList.toggle("vermelhoJS");
    setTimeout(function(){vermelho.classList.toggle("vermelhoJS")},1000);

}
const piscaVerde = function(){
    verde.classList.toggle("verdeJS");
    setTimeout(function(){verde.classList.toggle("verdeJS")},1000);

}
const piscaAmarelo = function(){
    amarelo.classList.toggle("amareloJS");
    setTimeout(function(){amarelo.classList.toggle("amareloJS")},1000);

}
const piscaAzul = function(){
    azul.classList.toggle("azulJS");
    setTimeout(function(){azul.classList.toggle("azulJS")},1000);

}
const declararCor = function(number){
    if(5 > number && number >= 0){
        ordemCores.push("vermelhoJS");
        setTimeout(piscaVermelho()
        ,i*1000);
        console.log('vermelho');
    };
    if(10 > number && number >= 5){
        console.log("azul");
        ordemCores.push("azulJS")
        setTimeout(piscaAzul()
        ,i*1000);
        
    };
    if(15 > number && number >= 10){
        ordemCores.push("amareloJS")
        setTimeout(piscaAmarelo()
        ,i*1000);
        console.log('amarelo');
    };
    if(20 > number && number >= 15){
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
    if (init=1){
        aleatorio(0,20);
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
            aleatorio(0,20);
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

