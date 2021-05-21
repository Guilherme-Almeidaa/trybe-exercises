strTexto = '30310030'

const formatedCep = (cep) => {
    const cepForm = cep.split('')
    if(cepForm.includes('-'))  cepForm.splice(cepForm.indexOf('-'),1)
 
    return cepForm.join('')
}

console.log(formatedCep(strTexto))