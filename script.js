let amarelo = document.querySelector('.amarelo');
let azul = document.querySelector('.azul');
let vermelho = document.querySelector('.vermelho');
let verde = document.querySelector('.verde');
let ordemCores = ['vermelhoJS', 'amareloJS', 'azulJS'];


/*
let aleatorio = function(min,max){
    return number = Math.floor(Math.random() * max);

}

aleatorio(0,20);
console.log(number);



if(5 > number && number >= 0){
    ordemCores.push("vermelhoJS");
    console.log('vermelho');
};
if(10 > number && number >= 5){
    console.log("azul");
    ordemCores.push("azulJS")

};
if(15 > number && number >= 10){
    ordemCores.push("amareloJS")
    console.log('amarelo');
};
if(20 > number && number >= 15){
    ordemCores.push("verdeJS")
    console.log('verde');
};*/


const piscar = function(){
    for(let value of ordemCores){
        console.log(value);
        
        if(value == "amareloJS"){
            amarelo.classList.t(value);
            setTimeout(function () {
                amarelo.classList.toggle(value);
            }, 1000);
            setTimeout(piscar,2000);
        }
        if(value == "azulJS"){
            azul.classList.toggle(value);
            setTimeout(function () {
                azul.classList.toggle(value);
            }, 1000);
            setTimeout(piscar,2000);
        }
        if(value == "vermelhoJS"){
            vermelho.classList.toggle(value);
            setTimeout(function () {
                vermelho.classList.toggle(value);
            }, 1000);
            setTimeout(piscar,2000);
        }
        if(value == "verdeJS"){ verde.classList.toggle(value);
            setTimeout(function () {
                verde.classList.toggle(value);
            }, 1000);
            setTimeout(piscar,2000);
            
        }
        
    }
}

