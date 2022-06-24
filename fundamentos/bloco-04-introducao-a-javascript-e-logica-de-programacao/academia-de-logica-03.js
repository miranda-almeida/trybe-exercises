// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. 
//Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: 

// Fórmulas: perimetro = (2 * base) + (2 * altura) / area = base * altura

let objeto = {
    area: 0,
    perimetro: 0
}

function perimetroCalculo(base, altura) {
    objeto.perimetro = (2 * base) + (2 * altura);
    objeto.area = base * altura; 
    return objeto;

}

console.log(perimetroCalculo(50, 190));


//Exercício 2 - Crie uma função que, dado um array de números inteiros, 
//retorne a quantidade de números pares e ímpares no formato:

let teste = [1,2,3,4,5,6,7,8,9];

var numeros = {
    pares: 0,
    ímpares: 0
  }

function retorna(array){
    for (index of array){
        if(index % 2 === 0){
            numeros.pares;
        } else {
            numeros.pares += 1;
        }
    }
}

console.log(retorna(teste));

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var numeros = {
    pares: 0,
    ímpares: 0
}

function retornaAmbos(numbers){
    for (index of numbers){
        if (index % 2 === 1) {
            numeros.impares += 1;
        } else {
            numeros.pares += 1;
        }
            return numeros;
    }
}

console.log(retornaAmbos(numbers));



  //Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
  //Considere que a string ending sempre será menor que a string word.
  //Dica: Use o split.
  
function verificacao(word, ending){
    for(index = 0; index < word.length; index += 1)
}
  
  // valor de teste: ‘trybe’ e ‘be’
  // valor esperado no retorno da função: true
  //verificaFimPalavra(‘trybe’, ‘be’);  
  // Retorno esperado: true  
  //verificaFimPalavra(‘joaofernando’, ‘fernan’);  
  //  Retorno esperado: false;  