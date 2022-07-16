// ---------------------------------------------------------------------- PARTE I - adicionando novas chaves (keys)

/*
crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. 
o retorno dessa função deve ser o objeto já com a nova chave adicionada nele.
*/

testandoObj = (objeto, chave, valor) => {
  objeto = {
    chave: 'valor',
  }
  
  chave = 'novaChave'
  valor = 'novo valor'
  objeto[chave] = valor;

  return objeto
}

console.log(testandoObj());

// ---------------------------------------------------------------------- PARTE II - Object.keys e Object.keys
/*
crie uma função que exiba as habilidades do objeto student. 
cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". 
*/
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

formatado = (student) => {
  const skills = Object.keys(student);
  for (const skill in skills) {
    console.log(`${skills[skill]}, Nível: ${student[skills[skill]]}`)
  }
}

console.log(formatado(student1));
console.log(formatado(student2));

// ---------------------------------------------------------------------- PARTE III - Object.entries
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
for(let index in pairKeyValue) {
  console.log('--------');
  console.log('País:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

console.log(pairKeyValue);