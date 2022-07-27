const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//  🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
const formatedBookNames = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

// console.log(formatedBookNames());

// 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
const nameAndAge = () => books.map((book) => ({author: book.author.name, age: book.releaseYear - book.author.birthYear,})).sort((book1, book2) => book1.age - book2.age);

// console.log(nameAndAge());


// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const fantasyOrScienceFiction = () => books.filter((book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia'));

// console.log(fantasyOrScienceFiction());

//  🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
const oldBooksOrdered = () => books.filter((book) => ((book.releaseYear < 2022 - 60))).sort((book1, book2) => book1.releaseYear - book2.releaseYear);

// console.log(oldBooksOrdered());

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const fantasyOrScienceFictionAuthors = () => books.filter((book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia')).map((book) => book.author.name).sort();

// console.log(fantasyOrScienceFictionAuthors());

//  🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const oldBooks = () => books.filter((book) => ((2022 - book.releaseYear) > 60)).map((book) => book.name);

// console.log(oldBooks());

// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const authorWith3DotsOnName = () => books.filter((book) => book.author.name.match(/(\..*){3,}/g)).find((title) => title.name).name;

// console.log(authorWith3DotsOnName());

// REGEXP REF: https://stackoverflow.com/questions/22199840/how-to-match-two-or-more-dots-in-a-string-using-regular-expression

// EXERCÍCIOS REDUCE
// 2 - Crie uma string com os nomes de todas as pessoas autoras.

// const authorsNames = Object.values(books);

const reduceNames = () => books.reduce((string, author) => `${string}${author.author.name}, `, '').replace(/.([^,]*)$/, '.');

// console.log(reduceNames());

// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const averageAge = () => books.reduce((average, ages) => Math.round(average += (ages.releaseYear - ages.author.birthYear) / (books.length)), 0);

// console.log(averageAge());

// 🚀 4- Encontre o livro com o maior nome.
const longestNamedBook = () => books.reduce((longest, names) => names.name.length > longest ? names.name : longest);
// {
//   const namesLength = names.name.length;
//   if (namesLength[index] > namesLength) {
//     return longest += names.name;
//   }
// }, {});


// console.log(longestNamedBook());

// name.length

//  🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce((counter, names) => {
  // const counterUppercase = names.match(/\A/);
  // const lowercaseA = names.match(/\a/);
  if (names.match(/\A/)) {
    let counterUppercase = counter;
    return counterUppercase += 1;
  }
  // if (names.match(/\a/)) {
  //   let counterLowercase = counter;
  //   return counterLowercase += 1;
  // }
  return `Uppercase A: ${counterUppercase}`;
});

console.log(containsA());