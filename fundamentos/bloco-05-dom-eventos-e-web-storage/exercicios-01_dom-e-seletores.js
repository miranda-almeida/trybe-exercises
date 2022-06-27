// -------------------------------------------------------------------------------------------------------------------- GET ELEMENT BY ID
// recupera o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito. 
document.getElementById('page-title').innerText = 'Amélie Poulain';

//  recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.getElementById('second-paragraph').innerText = 'Alterando segundo parágrafo';

// por fim, recupere o subtítulo e altere-o também. 
document.getElementById('subtitle').style.color = "red";

// altera a cor do primeiro parágrafo.
document.getElementById('paragraph').style.color = "pink";

// -------------------------------------------------------------------------------------------------------------------- GET ELEMENTS BY CLASS
// recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName;
let loremIpsum = document.getElementsByClassName('lorem-ipsum');
for (index = 0; index < loremIpsum.length; index += 1) {
    loremIpsum[index].innerText = 'trocando a frase';
}

// altere algum estilo do primeiro deles.
for (index = 0; index < loremIpsum.length; index += 1) {
    loremIpsum[2].style.color = 'pink';
}

// recupere o subtítulo e altere a cor dele usando a função getElementsByTagName.
let subtitleEdit = document.getElementsByTagName('h4');
for (index = 0; index < subtitleEdit.length; index += 1) {
    subtitleEdit[index].style.color = 'blueviolet';
}
