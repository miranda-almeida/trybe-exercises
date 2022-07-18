const myFizzBuzz = require('./myFizzBuzz');

describe('Realiza testes para a função myFizzBuzz', () => {
  // retorna fizzbuzz
  it('Parâmetro 15 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  // retorna fizz
  it('Parâmetro 9 retorna fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  // retorna buzz
  it('Parâmetro 5 retorna buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  // retorna erro
  it('Parâmetro não divisível por 3 ou 5', () => {
    expect(() => myFizzBuzz(2).toThrow(error.message));
  })
  // retorna false
  it('Parâmetro é string e retorna false', () => {
    expect(myFizzBuzz('')).toBe(false);
  })
});