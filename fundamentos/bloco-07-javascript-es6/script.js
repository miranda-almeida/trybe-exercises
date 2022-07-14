
// ------------------------------------------------------------------------------------- PARTE I
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

// ------------------------------------------------------------------------------------- PARTE II
// 1. Crie uma função que receba um número e retorne seu fatorial. 
fatorial = (n) => {
  if (n === 0) {
    return 1;
  }
  let result = n;
  while (n >= 2) {
    result *= --n;
  }
  return result;
}

console.log(fatorial(4));

// fatorialSmall = (n) => {(n >=2) ? n *= --n : 1}
// console.log(fatorialSmall(4));

// 2. Crie uma função que receba uma frase e retorne a maior palavra.
longestWord = (phrase) => {
  let phraseArray = phrase.match(/[a-záàâãéèêíïóôõöúçñA-Z0-9]+/gi);
  let largestWord = "";

  for(let index = 0; index < phraseArray.length; index += 1) {
    if (phraseArray[index].length > largestWord.length) {
      largestWord = phraseArray[index];
    }
  }
  return largestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// ref: https://www.geeksforgeeks.org/how-to-find-the-longest-word-within-the-string-in-javascript/

// 4. 🚀 Crie duas funções JavaScript com as seguintes especificações: 

/* 
- Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
  > A função deverá receber um nome por parâmetro;
  > Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
  > A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

EXEMPLO
  > Parâmetro: 'Bebeto'
  > Retorno: 'Tryber Bebeto aqui!'
*/
substituteX = (nome) => {
  const phrase = `Tryber x aqui`;
  let phraseCatch = phrase;
  phraseCatch = phrase.replace(/[x]/g, `${nome}`);
  return phraseCatch;
}


// console.log(substituteX('Miranda'));

/*
-  Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
  > A função deverá receber o retorno da Função 1 por parâmetro;
  > Declare dentro da função uma variável com o nome skills, do tipo const;
  > A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
  > Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

EXEMPLO DE RETORNO
  > Tryber Bebeto aqui!
  > Minhas três principais habilidades são:
      - JavaScript
      - HTML
      - CSS
*/

substituteX = (nome) => {
  const phrase = `Tryber x aqui`;
  let phraseCatch = phrase;
  phraseCatch = phrase.replace(/[x]/g, `${nome}`);
  return phraseCatch;
}

let functionOne = substituteX('Miranda');

returnSkills = (functionOne) => {
  console.log(functionOne);
  const skills = ['JavaScript', 'HTML', 'CSS'];
  return `Minhas três principais habilidades são: ${skills}`;
}

console.log(returnSkills(functionOne));