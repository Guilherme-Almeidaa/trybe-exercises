const error = {
    cep_isString: 'Cep inválido',
    cep_Length: 'O cep precisa ter 8 dijítos',
    
}

const formatedCep = (cep) => {
    const cepForm = cep.split('')
    if (cepForm.includes('-')) cepForm.splice(cepForm.indexOf('-'), 1)
    return cepForm.join('')
}

const validateCep = (cep) => {
    const code = 422
    if (isNaN(cep)) return { code, message: error.cep_isString }
    if (cep.length !== 8) return { code, message: error.cep_Length }
    return {}
}

module.exports = {
    formatedCep,
    validateCep,
}