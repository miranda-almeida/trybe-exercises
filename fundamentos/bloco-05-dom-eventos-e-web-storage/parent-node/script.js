// --------------------------------------------------------------------------- PARTE I - BUSCANDO ELEMENTOS
// Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta'));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'pink';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
document.getElementById('elementoOndeVoceEsta').firstElementChild.innerText = 'Lorem ipsum';

// Acesse o primeiroFilho a partir de pai.
document.getElementById('pai').firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').parentNode.innerText;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.
document.getElementById('pai').children[2];

// --------------------------------------------------------------------------- PARTE II - CRIANDO ELEMENTOS
// Crie um irmão para elementoOndeVoceEsta.
let parentNode = document.getElementById('pai');

let newSibling = document.createElement('section');

parentNode.appendChild(newSibling);


// Crie um filho para elementoOndeVoceEsta.
let elementoAtual = document.getElementById('elementoOndeVoceEsta');

let newChild = document.createElement('section');

elementoAtual.appendChild(newChild);   

// Crie um filho para primeiroFilhoDoFilho.
let primeiroFilho = document.getElementById('primeiroFilhoDoFilho');

let grandChild = document.createElement('section');

primeiroFilho.appendChild(grandChild);

// A partir desse filho criado, acesse terceiroFilho.
grandChild.parentNode.parentNode.nextElementSibling;


// --------------------------------------------------------------------------- PARTE III - REMOVENDO ELEMENTOS
//  Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
let paiDoPai = document.getElementById('paiDoPai');

paiDoPai.firstElementChild.firstChild.remove(); // remove 'primeiroFilho', que estava na posição [0] de pai

paiDoPai.firstElementChild.lastElementChild.remove(); // remove 'section' criado anteriormente

paiDoPai.firstElementChild.lastElementChild.remove(); // remove 'quartoEUltimoFilho'

paiDoPai.firstElementChild.lastElementChild.remove(); // remove 'terceiroFilho'

paiDoPai.firstElementChild.lastElementChild.lastElementChild.remove() // remove 'section'criado anteriormente dentro de elementoAtual

paiDoPai.firstElementChild.lastElementChild.lastElementChild.remove() // remove 'segundoEUltimoFilho' que restou