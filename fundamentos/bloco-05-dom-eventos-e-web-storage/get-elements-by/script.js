// Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()

// Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
document.querySelectorAll('.main-content .center-content p')[1].innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
document.getElementById('bloco-maior').style.background = 'rgb(76,164,109)';

// Crie uma função que mude a cor do quadrado vermelho para branco.
document.getElementById('bloco-menor').style.background = 'white';


// Crie uma função que corrija o texto da tag <h1>.
document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
document.getElementsByTagName('p')[0].style.fontVariant = 'small-caps';
document.getElementsByTagName('p')[1].style.fontVariant = 'small-caps';
document.getElementsByTagName('p')[2].style.fontVariant = 'small-caps';

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
document.getElementsByTagName('p');
