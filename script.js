let amarelo = document.querySelector('.amarelo');
let azul = document.querySelector('.azul');
let vermelho = document.querySelector('.amarelo');
let verde = document.querySelector('.verde');
let ordemCores = ['amareloJS', 'azulJS', 'vermelhoJS', 'verdeJS'];


const aleatorio = function(min, max){
    return Math.floor(Math.random() * max);
}

const piscar = function(){
    for(let value of ordemCores){
        // console.log(value);
        if(value == "amareloJS"){
            amarelo.classList.toggle(value);
            setTimeout(function () {
                amarelo.classList.toggle(value);
            }, 1000)
        }
        else if(value == "azulJS"){
            azul.classList.toggle(value);
            delay(1000);
            azul.classList.toggle(value);
            delay(1000);
        }
        else if(value == "vermelhoJS"){
            vermelho.classList.toggle(value);
            delay(1000);
            vermelho.classList.toggle(value);
            delay(1000);
        }
        else if(value == "verdeJS"){
            verde.classList.toggle(value);
            delay(1000);
            verde.classList.toggle(value);
            delay(1000);
        }
    }
}