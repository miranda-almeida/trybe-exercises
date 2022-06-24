// 1. Faça um algoritmo que calcule a soma de 35 a 105 usando a estrutura “for” e retorne no formato:
// A soma de 35 a 105 é: X.

let sum = 0;

for(index = 35; index <= 105; index += 1){
    sum = sum + index;
}

console.log('A soma de 35 a 105 é: ', sum);

// 2. Crie um algoritmo que conte quantos números do intervalo entre 15 e 155 são divisíveis por 3
// Caso a quantidade de números impares seja igual ou maior que 50, exiba uma mensagem secreta a sua escolha.

let contador = 0;

for(index = 0; index <= 10; index += 1){
    if(index % 3 === 1){
        contador ++;
    }
}

console.log(contador);

if(contador >= 50){
     console.log("Mensagem secreta");
} else {
    console.log("Menor que 50");
}


// 3. Crie um algoritmo que simula o jogo “pedra, papel e tesoura” levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// “Jogador 1 vence” ou “Empate” ou “Jogador 2 vence”.

let jogadorUm = "pedra";
let jogadorDois = "tesoura";

if (jogadorUm === "pedra" && jogadorDois === "papel" || jogadorUm === "papel" && jogadorDois === "tesoura" || jogadorUm === "tesoura" && jogadorDois === "pedra"){
    console.log("Jogador 2 vence");
} else if (jogadorUm === "papel" && jogadorDois === "pedra" || jogadorUm === "tesoura" && jogadorDois === "papel" || jogadorUm === "pedra" && jogadorDois === "tesoura"){
    console.log("Jogador 1 vence");
} else {
    console.log("Empate");
}

// 4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: “A pessoa é maior de idade” ou “A pessoa é menor de idade”.
// Bônus: Crie a condição utilizando operador ternário.

let age = 15;

if(age > 18){
    console.log('A pessoa é maior de idade');
} else {
    console.log('A pessoa é menor de idade');
}


// 5. Crie um algoritmo que recebe a idade de Ademar, Adriana e Julia e imprima quem é a mais nova no formato:
// “Pessoa” é a mais nova.

let ademar = 45;
let adriana = 90;
let julia = 23;

if(ademar < adriana && ademar < julia){
    console.log("ademar é a pessoa mais nova");
} else if(adriana < ademar && adriana < julia){
    console.log("adriana é a pessoa mais nova");
} else {
    console.log("julia é a pessoa mais nova");
}