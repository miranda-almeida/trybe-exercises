// quiz 1
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(name of names){
    console.log(name);
}

// quiz 2
const jogos = ['Doom', 'Skyrim', 'Final Fantasy'];
console.log(jogos);
jogos[0] = 'Warcraft III';
console.log(jogos);


// quiz 3
const lista = ['arroz', 'feijão', 'carne'];
for (let index = 0; index < lista.length; index+= 1) {
  console.log(lista[index])
}

// quiz 4
let comidas = ['batata-frita', 'salgadinho', 'pizza'];
for (let index = 0; index < comidas.length; index += 1) {
    console.log(comidas[index]);
}

// quiz 5
let animes = ['Dragon Ball', 'Naruto', 'Pokémon'];
for (let index = 0; index < animes.length; index+= 1) {
  console.log(animes[index])
}

// quiz 6
for(let index = 0; index < 10; index+=1 ){
    console.log(index);
}

// quiz 7
for(let index = 0; index <= 20; index+=1 ){
    console.log(index);
}

// quiz 8
for(let index = 0; index <= 10; index+=1 ){
    console.log('Oie');
}


// exercícios

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// percorra o array imprimindo todos os valores nele contidos com a função console.log()

console.log(numbers);

// some todos os valores contidos no array e imprima o resultado;

// sum = 0;

// for(index = 0; index < numbers.length; index += 1){
//     sum += numbers[index];    
// }

// console.log(sum);

// calcule e imprima a média aritmética dos valores contidos no array. caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// console.log(numbers.length);

// 10 números no array

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

sum = 0;

for(index = 0; index < numbers.length; index += 1){
    sum += numbers[index];    
}

for(index = 0; index < numbers.length; index += 1){
    media = sum / 10;
}

if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

// 🚀  utilizando for, descubra qual o maior valor contido no array e imprima-o. fazer o mesmo com o menor valor

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// imprime maior valor
let maiorValor = numbers[0];

for(index = 0; index < numbers.length; ++ index){
    if (numbers[index] > maiorValor){
        maiorValor = numbers[index];
    }
}

console.log(maiorValor);

// imprime menor valor
let menorValor = numbers[0];

for(index = 0; index < numbers.length; ++ index){
    if (numbers[index] < menorValor){
        menorValor = numbers[index];
    }
}

console.log(menorValor);


// descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;

for(index = 0; index < numbers.length; index += 1){
    if (index % 2 === 1) {
        impares ++;
    }
}

if (impares > 0) {
    console.log(impares);
} else {
    console.log('nenhum valor ímpar encontrado');
}

// utilizando for, crie um array que vá de 1 até 25 e imprima o resultado

array = [];

for(array = 1; array <= 25; array += 1) {
    console.log(array);
}

// PENDENTE utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

array = [];
division = 0;

for(array = 1; array <= 25; array += 1) {
    for(index = 0; index < array.length; index += 1) {
        division = array[index] / 2;
    }
}

console.log(division);

// PENDENTE bônus

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// 1) ordene o array numbers em ordem crescente e imprima seus valores;

// 2) ordene o array numbers em ordem decrescente e imprima seus valores;

// 3) agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array: [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
