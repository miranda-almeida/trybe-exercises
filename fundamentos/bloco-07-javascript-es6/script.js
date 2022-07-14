
// 1. 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas. 
testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// 2. 🚀 Crie uma função que retorne um array em ordem crescente. 
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const reorder = (a, b) => {
  return a - b;
}
const result = oddsAndEvens.sort(reorder);

console.log(`Os números ${result} se encontram ordenados de forma crescente!`); 

// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort