const readlineSync = require('readline-sync');


const calculaImc = () => {
    let situation = ''
    console.log('Calcule seu IMC\n')
    const height = readlineSync.questionFloat('Qual sua altura?\n');
    const weight = readlineSync.questionFloat('Qual seu peso?\n');
    
    const result = (weight / height ** 2).toFixed(2)
     if(result < 18.5) {
         situation = 'Abaixo do peso (magreza)'
     } else if (result >= 18.5 && result <= 24.9) {
        situation = 'Peso normal'
     }else if (result >= 25 && result <= 29.9) {
        situation = 'Acima do peso (sobrepeso)'
    }else if (result >= 30 && result <= 34.9) {
        situation = 'Obesidade grau I'
    }else if (result >= 35 && result <= 39.9) {
        situation = 'Obesidade grau I'
    } else {
        situation = 'Obesidade graus III e IV'
    }
    console.log(`\nSeu IMC é ${result}`)
    console.log(`Sua situação é ${situation}`)
}

module.exports = calculaImc;
