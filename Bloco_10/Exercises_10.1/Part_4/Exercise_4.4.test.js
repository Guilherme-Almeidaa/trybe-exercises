

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const expected = myFizzBuzz(7)


test('Check that it is not divisible 5 and 3' , () => {
  expect(expected).toBe(7);
})