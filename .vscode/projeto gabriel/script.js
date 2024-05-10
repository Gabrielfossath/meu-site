

//alert("Bem vindo ao jogo do numero secreto");
//let nome = prompt("Qual o seu nome?");
//let numeroEscolido = prompt(`Escolha um numero de 1 a 100 ${nome}`);
//let numeroAleatorio = 1;//parseInt(Math.random() * 100 +1);
//let tentativas = 1;


//if(numeroEscolido == numeroAleatorio){
  //  alert(`Parabens ${nome}, voce acertou o numero secreto de primeira`);
//}else if(numeroEscolido > numeroAleatorio){
 //   alert('O numero secreto e menor');
//} else{
 // alert('o numero secreto e maior');
//}






//while(numeroEscolido != numeroAleatorio){
  //  let numeroEscolido = prompt(`Escolha um numero de 1 a 100 ${nome}`);
    //tentativas ++
    //if(numeroEscolido == numeroAleatorio){
      //  alert(`Parabens ${nome}, voce acertou o numero secreto com ${tentativas} tentativas`)
    //break
    //}else if(numeroEscolido > numeroAleatorio){
      //  alert('O numero secreto e menor')
    //} else{
     // alert('o numero secreto e maior')
    //}
//}

 



// codigo do quiz
// Selecionar os elementos HTML
//const scoreDisplay1 = document.getElementById('score1');
//const scoreDisplay2 = document.getElementById('score2');
//const btn1 = document.getElementById('btn1');
//const btn2 = document.getElementById('btn2');

// Inicializar as pontuações
//let score1 = 0;
//let score2 = 0;

// Atualizar a pontuação exibida para o botão 1
//function updateScore1() {
  //  scoreDisplay1.textContent = score1;
//}

// Atualizar a pontuação exibida para o botão 2
//function updateScore2() {
  //  scoreDisplay2.textContent = score2;
//}

// Adicionar evento de clique para o botão 1
//btn1.addEventListener('click', function() {
  //  score1 += 1;
   // updateScore1();
//});

// Adicionar evento de clique para o botão 2
//btn2.addEventListener('click', function() {
  //  score2 += 1;
    //updateScore2();
//});

let contador1 = 0;
let contador2 = 0;

document.getElementById("botao1").addEventListener("click", function() {
  contador1++;
  atualizarContador("contador1", contador1);
});

document.getElementById("botao2").addEventListener("click", function() {
  contador2++;
  atualizarContador("contador2", contador2);
});

function atualizarContador(id, valor) {
  document.getElementById(id).textContent = "Contagem: " + valor;
}
