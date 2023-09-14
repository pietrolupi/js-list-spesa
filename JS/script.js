
let listaSpesa = ['vino', 'sigarette', 'vodka', 'birra', 'noodles'];
const messaggio = document.getElementById('messaggio');

const btnAzione = document.getElementById('btn-spesa');

let counterSpesa = 0;
let check = false;


btnAzione.addEventListener('click', function(){

  while(!check){
   
    if(counterSpesa === listaSpesa.length){
      check = true;
    }else{
      messaggio.innerHTML += `<h1>${listaSpesa[counterSpesa]}</h1>`;
      counterSpesa ++;
    }
   
  }

})


//se un tutor legge... perchè così non funziona?
/* 

btnAzione.addEventListener('click', function(){

  while(counterSpesa === listaSpesa.length){
   
      messaggio.innerHTML += `<h1>${listaSpesa[counterSpesa]}</h1>`;
      counterSpesa ++;
   
  }

}); */