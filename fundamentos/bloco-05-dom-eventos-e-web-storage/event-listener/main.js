const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// ---------------------------------------------------------------------------------------------- OK
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// isso ocorre devido a classe 'tech' aplicada na #first-li, que está com a configuração 'transform: translateY(-20px);'


// ---------------------------------------------------------------------------------------------- 1/2
// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

firstLi.classList.remove('tech'); // remove a classe 'tech' da caixa desalinhada

let applyTransform = document.getElementsByTagName('li');
let techAtivada = document.getElementsByClassName('tech');

function addTechClass(event) {
  event.target.className = 'tech';
}

// let square = document.getElementsByClassName('square');
// function addSquareClass(event) {
//   for (let index = 0; index < square.length; index += 1) {
//     if (square[index].className === 'square tech') {
//       event.target.className = 'square';
//     }
//     if (square[index].className === 'square') {
//       event.target.className = 'square tech';
//     }
//   }
// }

function firstSquare(event) {
  for (let index = 0; index < applyTransform.length; index += 1) {
    applyTransform[0].addEventListener('click', addTechClass);
  }
  for (let index = 0; index < techAtivada.length; index += 1) {
    techAtivada[0].addEventListener('click', addTechClass);
    let techAtivada = document.getElementsByClassName('tech');
  }
}
firstLi.addEventListener('click', firstSquare);



// for (let index = 0; index < applyTransform.length; index += 1) {
//   applyTransform[0].addEventListener('click', addTechClass);
//   applyTransform[1].addEventListener('click', addTechClass);
//   applyTransform[2].addEventListener('click', addTechClass);
// }

// referencia
// if(cores[posicao].className == 'color selected') {
//   cores[posicao].className = 'color';
// }



// ---------------------------------------------------------------------------------------------- FOCUSOUT X
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
// function textWithTech() {
//   let techAtivada = document.getElementsByClassName('tech');
//   for (index = 0; index < techAtivada.length; index += 1){
//     techAtivada[0].innerText = input.value;
//     techAtivada[1].innerText = input.value;
//     techAtivada[2].innerText = input.value;
//   }
// }

// input.addEventListener('keydown', textWithTech); 


// ---------------------------------------------------------------------------------------------- REDIRECT?
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
function doubleClick(event) {

}

myWebpage.addEventListener('dblclick', doubleClick);

// ---------------------------------------------------------------------------------------------- OK
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function hoverColorOn(event) {
  event.target.style.color = 'pink';
}

myWebpage.addEventListener('mouseover', hoverColorOn);

function hoverColorOff(event) {
  event.target.style.color = 'white';
}

myWebpage.addEventListener('mouseout', hoverColorOff);



// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.