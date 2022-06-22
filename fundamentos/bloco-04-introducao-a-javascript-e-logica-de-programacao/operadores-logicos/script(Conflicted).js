// && operador AND: operador binário, considera o caso de que ambas as operações que está inserido são consideradas 'true'
// const comida = 'pão na chapa';
// const bebida = 'cafezinho';

// if (bebida === 'cafezinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

//o operador só retorna como 'true' caso ambas as condições sejam verdadeiras, no caso de uma única não ser 'true' ele retorna 'false'
// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo);

// já no encadeamento do operador &&, o código será compilado da esquerda para a direita ao verificar todas as condições e retornar 'true'
// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

//cheatsheet:
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

//exercício:
// const currentHour = 13;
// let message = "";

// if (currentHour >= 22) {
//     message = "Não deveríamos comer nada, é hora de dormir"
// } else if(currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar :D"
// } else if(currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?"
// } else if(currentHour >= 11 && currentHour < 14) {
//     message = "Hora do almoço!!!"
// } else if(currentHour >= 4 && currentHour < 11) {
//     message = "Hmmm, cheiro de café recém passado"
// } else {
//     message = "Vai dormir"
// }

// console.log(message)

// || operador OR: apesar uma das condições expostas precisam ser verdadeiras
// const bebidaPrincipal =  'cafezinho';
// const bebidaAlternativa = 'suco de laranja';

// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

const weekDay = "terça-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
    console.log("FINALMENTE, descanso merecido UwU");
}

// ! operador NOT: capaz de inverter o valor booleano de um elemento

const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false

console.log(!42); // false
console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

console.log(!null); // true

console.log(!undefined); // true