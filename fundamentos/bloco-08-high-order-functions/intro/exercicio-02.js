/*
Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/
// const bingo = (number) => {
//   const sorteio = Math.floor(Math.random() * 6);
//   if (bet === 0) {
//     return 'Insira um valor de 1 a 5';
//   }
//   if (bet === number) {
//     return bingo();
//   }
// }

// const ganha = (number) => {
//   if (bet === number) {
//     return `Parabéns, você ganhou! Número sorteado: ${number}`;
//   }
// }

// const perde = (number) => {
//   if (bet !== number) {
//     return `Tente novamente. Número sorteado: ${number}`;
//   }
// }


// console.log(bingo(1));

const numberChecker = (myNumber, number) => { 
  if (myNumber === number) {
    return true;
  }
}

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 1 + 1);
  if (callback(myNumber, number) === true) {
    return 'Lucky day, you won!';
  } else {
    return `Try Again! sorteio: ${number}`
  }
};

console.log(lotteryResult(1, numberChecker));
