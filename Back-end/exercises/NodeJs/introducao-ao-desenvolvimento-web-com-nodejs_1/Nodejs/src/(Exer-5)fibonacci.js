const inquirer = require('inquirer');

const questions = [ 
    {
        type:'input',
        name:'fibonacci',
        message:'Insira um número: ',
        validate: async (input) => {
            return new Promise((resolve,reject) => {
                if(isNaN(Number(input))) {
                    return reject(new Error('Dijite um número'))
                }
                if(!Number.isInteger(Number(input))) {
                        return reject(new Error('Dijite um número inteiro'))
                }
                if(Number(input) === 0) {
                    return reject(new Error('Número inválido'))
                }
                resolve(true)
            })
        }
    }
]

const calculoFibonacci = (value) => {

   if(value === 0) {
       return 0
   }

   return value % 10 + calculoFibonacci(Math.floor(value/10))
}

const fibonacci = () => {
    inquirer.prompt(questions).then(answers => {
        const object = JSON.stringify(answers);
        const  {fibonacci} = JSON.parse(object)
        const result = calculoFibonacci(fibonacci)
          console.log(result)
    })
}

module.exports = fibonacci;