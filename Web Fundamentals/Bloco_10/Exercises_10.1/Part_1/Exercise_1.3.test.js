

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
test('Check typeof', () => {
  expect(sum(4, '5')).toEqual(9);
})