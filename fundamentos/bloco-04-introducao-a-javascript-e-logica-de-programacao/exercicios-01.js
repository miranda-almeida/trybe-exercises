
// faça um programa que retorne o maior de dois números. defina no começo do programa duas constantes com os valores que serão comparados. 
numberOne = 4;
numberTwo = 13;

if (numberOne > numberTwo) {
    console.log(numberOne);
} else {
    console.log(numberTwo);
}

// faça um programa que retorne o maior de três números. defina no começo do programa três constantes com os valores que serão comparados. 

numberOne = 85687;
numberTwo = 936;
numberThree = 7368;

if (numberOne > numberTwo && numberOne > numberThree){
    console.log(numberOne + " is greater");
} else if (numberTwo > numberOne && numberTwo > numberThree){
    console.log(numberTwo + " is greater");
} else {
    console.log(numberThree + " is greater");
}

// faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 

const value = 0;

if (value > 0){
    console.log("positive");
} else if (value < 0){
    console.log("negative");
} else {
    console.log("zero");
}

// 🚀 faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. se algum ângulo for inválido o programa deve retornar uma mensagem de erro. (para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus)

const angleOne = 70;
const angleTwo = 90;
const angleThree = 120;

isTriangle = true;
notTriangle = false;

if (angleOne + angleTwo + angleThree === 180){
    console.log(isTriangle);
} else if (angleOne < 0 || angleTwo < 0 || angleThree < 0){
    console.log("invalid value");
} else {
    console.log(notTriangle);
}

// escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz (exemplo: bishop -> diagonals. como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case). Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. Exemplo: bishop (bispo) -> diagonals (diagonais). 
//let lowerCaseName = "Your Name".toLowerCase(); <- toLowerCase method: https://www.w3schools.com/jsref/jsref_tolowercase.asp

let piece = "BISHOP".toLowerCase();
let movement = "walks on diagonals"

//let piece = "horse";

if(piece === "bishop" || piece === "BISHOP".toLowerCase()){
    console.log(movement);
} else {
    console.log("invalid input");
}

// escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// o programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

percentage = 150;

if (percentage < 0 || percentage > 100) {
    console.log("invalid input");
} else if (percentage >= 90 && percentage <= 100){
    console.log("A");
} else if (percentage >= 80) {
    console.log("B");
} else if (percentage >= 70) {
    console.log("C");
} else if (percentage >= 60) {
    console.log("D");
} else if (percentage >= 50) {
    console.log("E");
} else if (percentage < 50 && percentage === 0) {
    console.log("F");
} else if (percentage === ""){
    console.log("please insert a value to be converted");
}

// 🚀 escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. caso contrário, ele retorna false. utilizar apenas um if.

//const one = 5;
//const two = 67;
//const three = 13;

if(one % 2 === 0 || two % 2 === 0 || three % 2 === 0){
    console.log(true);
} else {
    console.log(false);
}

// escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. caso contrário, ele retorna false. utilizar apenas um if.

const one = 8;
const two = 66;
const three = 14;

if(one % 2 === 1 || two % 2 === 1 || three % 2 === 1){
    console.log(true);
} else {
    console.log(false);
}

// escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. a partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. 
//atente que, sobre o custo do produto, incide um imposto de 20%. seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero. o lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// productWithTaxes = product + taxes
// profit = sale - productWithTaxes (lucro de um produto)

// input values
const productCost = 1200;
const sale = -9;

// fixed algoritm
var productWithTaxes = productCost * 0.2
var profit = sale - productWithTaxes

if(productCost > 0 && sale > 0){
    console.log(profit);    
} else {
    console.log("invalid input");
}

// uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// a notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// 1) salário bruto até R$ 1.556,94: alíquota de 8%
// 2) salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// 3) salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// 4) salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

salarioBruto = 4500.50;

let aliquotaOito = salarioBruto * 0.08;
let aliquotaNove = salarioBruto * 0.09;
let aliquotaOnze = salarioBruto * 0.11;
let aliquotaMaxima = salarioBruto - 570.88;

let salarioBase;

if (salarioBruto <= 1556.94){
    salarioBase = salarioBruto - aliquotaOito
    console.log(salarioBase);
} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - aliquotaNove
    console.log(salarioBase);
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - aliquotaOnze;
    console.log(salarioBase);
} else {
    salarioBase = aliquotaMaxima
    console.log(salarioBase);
}



//IR (Imposto de Renda)

// 1) até R$ 1.903,98: isento de imposto de renda
// 2) de R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// 3) de R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// 4) de R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// 5) acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let impostoSete = (salarioBase * 0.075) - 142.80;
let impostoQuinze = (salarioBase * 0.15) - 354.80;
let impostoVintedois = (salarioBase * 22.5) - 636.13;
let impostoVintesete = (salarioBase * 27.5) - 869.36;

let salarioLiquido;

if (salarioBase < 1903.98){
    console.log(salarioLiquido);
} else if (salarioBase > 1903.99 && salarioBase <= 2826.65){
    salarioLiquido = salarioBase - impostoSete;
    console.log(salarioLiquido);
} else if (salarioBase > 2826.66 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - impostoQuinze;
    console.log(salarioLiquido);
} else if (salarioBase > 3751.06 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - impostoVintedois;
    console.log(salarioLiquido);
} else {
    salarioLiquido = salarioBase - impostoVintesete;
    console.log(salarioLiquido);
}

// exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. o cálculo será:

// o salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. assim, temos:

// - R$ 2.670,00: salário com INSS já deduzido;
// - 7.5%: alíquota de imposto de renda;
// - R$ 142,80 parcela a se deduzir do imposto.

// fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

// o último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// resultado: R$ 2.612,55.
// dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

// salário a ser calculado
salarioBruto = 3000;

// variáveis do INSS
let aliquotaOito = salarioBruto * 0.08;
let aliquotaNove = salarioBruto * 0.09;
let aliquotaOnze = salarioBruto * 0.11;
let aliquotaMaxima = salarioBruto - 570.88;

let salarioBase;

if (salarioBruto <= 1556.94){
    salarioBase = salarioBruto - aliquotaOito;
} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - aliquotaNove
} else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - aliquotaOnze;
} else {
    salarioBase = aliquotaMaxima
}

//variáveis do IR
let impostoSete = (salarioBase * 0.075) - 142.80;
let impostoQuinze = (salarioBase * 0.15) - 354.80;
let impostoVintedois = (salarioBase * 22.5) - 636.13;
let impostoVintesete = (salarioBase * 27.5) - 869.36;

let salarioLiquido;

if (salarioBase < 1903.98){
    console.log("O salário líquido é: R$" + salarioLiquido);
} else if (salarioBase > 1903.99 && salarioBase <= 2826.65){
    salarioLiquido = salarioBase - impostoSete;
    console.log("O salário líquido é: R$" + salarioLiquido);
} else if (salarioBase > 2826.66 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - impostoQuinze;
    console.log("O salário líquido é: R$" + salarioLiquido);
} else if (salarioBase > 3751.06 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - impostoVintedois;
    console.log("O salário líquido é: R$" + salarioLiquido);
} else {
    salarioLiquido = salarioBase - impostoVintesete;
    console.log("O salário líquido é: R$" + salarioLiquido);
}
