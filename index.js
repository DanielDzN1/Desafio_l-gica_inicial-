// Declarando as variaveis 

let nomeDoHeroi = "Maria_Marreta"
let experienciaDoHeroi = 8500
let nivel

// Declarando o nivel do heroi com base em seu xp 

switch (true){
  
  case (experienciaDoHeroi <= 1000):
    nivel = 'Ferro';
    break;
  
  case (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000):
    nivel = 'Bronze';
    break;

  case(experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000):
    nivel = 'Prata';
    break;
  
  case(experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000):
    nivel = 'Ouro';
    break;
    
  case(experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000):
    nivel = 'Platina';
    break;

  case(experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000):
    nivel = 'Ascendente';
    break;

  case(experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000):
    nivel = 'Imortal';
    break;

  case(experienciaDoHeroi >= 10001):
    nivel = 'Radiante';
    break;
}

//Exibindo uma mensagem com o nome e nivel do heroi com base em seu xp 

if (experienciaDoHeroi <= 1000) {
  console.log ('O Herói de nome ' +[nomeDoHeroi] +' está no nível de '+ [nivel]);
}
 
else if(experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
  console.log ('O Herói de nome ' +[nomeDoHeroi] +' está no nível de '+ [nivel]);
}

else if(experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
  console.log ('O Herói de nome ' +[nomeDoHeroi] +' está no nível de '+ [nivel]);
}

else if(experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000) {
  console.log ('O Herói de nome ' +[nomeDoHeroi] +' está no nível de '+ [nivel]);
}

else if(experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
  console.log ('O Herói de nome ' +[nomeDoHeroi] +' está no nível de '+ [nivel]);
}

else if(experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
  console.log ('O Herói de nome ' +[nomeDoHeroi] +' está no nível de '+ [nivel]);
}

else if(experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
  console.log ('O Herói de nome ' +[nomeDoHeroi] +' está no nível de '+ [nivel]);
}

else{
  console.log ('O Herói de nome ' +[nomeDoHeroi] +' está no nível de '+ [nivel]);
}