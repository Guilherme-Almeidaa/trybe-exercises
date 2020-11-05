    
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
 const avarage = notas.map((notes , index )=> ({ //Ultilizei a HOF map  para criar outro array com os objetos
   name:alunos[index],//Como no exercício  fala que a posição das notas é a  mesma do aluno !
   average: notes.reduce((notesSum , note )=>notesSum + note) / notes.length //Utilizei a HOF reduce para somar todas as notas e dividir pelo quantidade de notas para achar o média
 }));
return avarage;
}
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepEqual(studentAverage(), expected);