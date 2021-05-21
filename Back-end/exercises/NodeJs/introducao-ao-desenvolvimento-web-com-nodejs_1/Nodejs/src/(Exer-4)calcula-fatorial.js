const inquirer = require('inquirer');

const questions = [
    {
        name:'fatorial',
        type:'input',
        message:'Dijite um número para o calculo: ',
        validate: async (input) => {
            return new Promise((resolve,reject) => {
                if(isNaN(Number(input))) {
                    return reject(new Error('Dijite um número'))
                }
                if(!Number.isInteger(Number(input))) {
                        return reject(new Error('Dijite um número inteiro'))
                }
                resolve(true)
            })
}
    }
]

const fatorialResult = (value) => {
    let result = 1
    for(let index = 2; index <= value; index++) {
          result = result * index
    }
    return parseInt(result,10)
}

const calculeFactorial = () => {
    inquirer.prompt(questions).then(answers => {
        
        const object = JSON.stringify(answers);
        const {fatorial} = JSON.parse(object);
        const result = fatorialResult(fatorial)

        console.log(result)
    })
}

module.exports = calculeFactorial;