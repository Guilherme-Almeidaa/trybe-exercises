const assert = require('assert');
const greetPeople = (people) => {
    let greeting = 'Hello ';
    let good =[]
  
    for (const person in people) {
     good.push(`${greeting}${people[person]}`);
    }
    return good;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  const greet = greetPeople(parameter)
  assert.deepStrictEqual(greet , result)