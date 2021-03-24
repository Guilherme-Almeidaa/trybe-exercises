const readlineSync = require('readline-sync');


const calculaImc = () => {

    console.log('Calcule seu IMC\n')
    const height = readlineSync.questionFloat('Qual sua altura?');
    const weight = readlineSync.questionFloat('Qual seu peso?');
    
    const result = (weight / height ** 2).toFixed(2)
    
    console.log(`Seu IMC é ${result}`)
}

module.exports = calculaImc;