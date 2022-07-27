/*
 3 - Crie uma HOF que receberá três parâmetros:

    O primeiro será um array de respostas corretas (Gabarito);
    O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
    O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
        Uma resposta correta adiciona 1 ponto à pontuação final;
        A ausência de uma resposta não altera a pontuação (quando for "N.A");
        Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
    Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

*/
//                      +1  D.N  +1  +1  +1 -0.5 D.N +1  +1  -0.5
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (student) => {
  const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
  let pontos = 0;
  for(let index = 0; index < student.length; index += 1) {
    if (student[index] === RIGHT_ANSWERS[index]) {
      pontos += 1;
    }
    if (student[index] !== RIGHT_ANSWERS[index]) {
      pontos -= 0.5;
    }
    if (student[index] === 'N.A') {
      pontos += 0.5;
    }
  }
  return pontos;
}


console.log(compare(STUDENT_ANSWERS));