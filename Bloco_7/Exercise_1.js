const factorial = (num) => {
  let result;
   
  for (let index = num-1; index > 0; index -= 1) {
        result = num *= index;
        }
    return result;
}
console.log(factorial(5));