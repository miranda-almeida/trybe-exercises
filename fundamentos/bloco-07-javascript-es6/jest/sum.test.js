const sum = require('./sum.js');
const myRemove = require('./sum.js');

describe('Realiza testes para a função sum', () => {
  // retorna 9
  it('Parâmetros 4 e 5 retornam 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  // retorna 0
  it('Parâmetros 0 e 0 retornam 0', () => {
    expect(sum(0,0)).toBe(0);
  })
  // retorna erro ao input ser string
  it('Retorna mensagem de erro caso input seja string', () => {
    expect(() => sum(4, '5').toThrow(error.message));
  });
});


