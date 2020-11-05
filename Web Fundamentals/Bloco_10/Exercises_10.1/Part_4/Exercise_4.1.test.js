

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const expected = myFizzBuzz(15)
test('Check if it is divisible by 5 or 3' , () => {
  expect(expected).toBe('fizzbuzz');
})