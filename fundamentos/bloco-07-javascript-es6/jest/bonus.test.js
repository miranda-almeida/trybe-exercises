const searchEmployee = require('./bonus');

it('Verifica se a função existe', () => {
  expect(typeof searchEmployee).toBe('function');
})