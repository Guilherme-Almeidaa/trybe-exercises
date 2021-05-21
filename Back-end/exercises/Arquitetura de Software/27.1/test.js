const validatePassword = (password) => /^\d{6,12}$/gm.test(password);
const n = '213sadsada'
if(validatePassword(Number(n))) {
    console.log('true')
}