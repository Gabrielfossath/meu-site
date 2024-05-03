

alert("Bem vindo ao jogo do numero secreto");
let nome = prompt("Qual o seu nome?");
let numeroEscolido = prompt(`Escolha um numero de 1 a 100 ${nome}`);
let numeroAleatorio = parseInt(Math.random() * 100 +1);
let tentativas = 1;


if(numeroEscolido == numeroAleatorio){
    alert(`Parabens ${nome}, voce acertou o numero secreto de primeira`);
}else if(numeroEscolido > numeroAleatorio){
    alert('O numero secreto e menor');
} else{
  alert('o numero secreto e maior');
}






while(numeroEscolido != numeroAleatorio){
    let numeroEscolido = prompt(`Escolha um numero de 1 a 100 ${nome}`);
    tentativas ++
    if(numeroEscolido == numeroAleatorio){
        alert(`Parabens ${nome}, voce acertou o numero secreto com ${tentativas} tentativas`)
    break
    }else if(numeroEscolido > numeroAleatorio){
        alert('O numero secreto e menor')
    } else{
      alert('o numero secreto e maior')
    }
}

    //alert ('bem vindo ao jogo do numero secreto');
//let nome = prompt('Qual o seu nome?');
//let numeroSecreto = parseInt(Math.random() * 100 +1);
//let tentativas = 1;
//let numeroGerado = prompt(`escolha um numero de 1 a 100 ${nome}`);

  // if (numeroSecreto == numeroGerado){
    //alert (`voce acertou de primeira ${nome}`);
//}else if (numeroSecreto > numeroGerado){
  //  alert ('o numero secreto e maior');
//}else {
  //  alert ('o numero secreto e menor');
//}


//while (numeroSecreto != numeroGerado){
  //  let numeroGerado = prompt(`Ecolha um numero de 1 a 100 ${nome}`);
    //tentativas ++
    //if (numeroSecreto == numeroGerado){
      //  alert (`voce acertou o numero secreto ${nome}, com ${tentativas} tentativas`);
        //break
    //}else if (numeroSecreto > numeroGerado){
     //   alert ('o numero secreto e maior');
    //}else {
      //  alert ('o numero secreto e menor');//
    
