const inquirer = require('inquirer');

const questions = [
    {
        
        type:'input',
        name:'height',
        message:'Posso saber sua altura?',
        validate: async function(input) {
            return new Promise((resolve,reject)=> {
                if(isNaN(parseFloat(input))) {
                     return reject(new Error('dijite um numero'))
                } 
 
                return resolve(true)
            })
          
        }
    },
    {
        
        type:'input',
        name:'weight',
        message:'Posso saber sua peso?',
        validate: async function(input) {
            return new Promise((resolve,reject)=> {
                if(isNaN(parseFloat(input))) {
                     return reject(console.log('dijite um numero'))
                } 
 
                return resolve(true)
            })
        }
    }
]
module.exports = function () {
    console.log('Calcule seu IMC\n')
    
    inquirer.prompt(questions).then(answers => {
        let situation = ''
     const wieght = JSON.parse(JSON.stringify(answers,null, ' ')).weight
     const hieght = JSON.parse(JSON.stringify(answers,null, ' ')).height
     const result = (wieght/hieght ** 2).toFixed(2)

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
     
           
    }).catch(error => {
        if(error.isTtyError) {
            'error'
        } else {
            'erro desconhecido'
        }
    })
   
}
