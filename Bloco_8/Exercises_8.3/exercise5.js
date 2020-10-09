    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
   const everyNames = names.reduce((result , name) => result + name);//Utilizei a HOF reduce para concatenar todos os nomes.
   const letthers = everyNames.split('')// Utilizei a função split para criar um array com todas as letras separadas.
    const amountA = letthers.filter((letther) => letther.toLocaleLowerCase() === 'a');// Utilizei a HOF filter para criar um array com todas as letras 'a' utilizando toLowerCase para passar todos os "a" para minusculo.
  return  amountA.length; // E retornar o tamanho  array de 'a'
}

assert.deepEqual(containsA(), 20);