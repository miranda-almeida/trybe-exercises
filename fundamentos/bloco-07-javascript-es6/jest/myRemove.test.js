const myRemove = require('./myRemove');

describe('Realiza testes para a função myRemove', () => {
  // retorna [1, 2, 3, 4]
  it('Parâmetros myRemove([1, 2, 3, 4], 3) retornam [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  it('Parâmetros myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  // retorna [1, 2, 3, 4]
  it('Prâmetros myRemove([1, 2, 3, 4], 5) retornam [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
