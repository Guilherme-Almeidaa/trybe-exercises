
const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/.test(email);

const checkEmailAndPasswordMiddiwares = ( req, res, next) => {
    const { email, password } = req.body;

    if (!password) {
        res.status(400).json({
            error:true,
            message:`O campo 'password' precisa ser informado`
        })
    }

    if (!email) {
        res.status(400).json({
            error:true,
            message:`O campo 'email' precisa ser informado`
        })
    }

    if (password.length < 6) {
        res.status(400).json({
            error:true,
            message:`O campo 'password' deve ter pelo menos 6 caracteres`
        })
    }
    if (typeof password !== 'string') {
        res.status(400).json({
            error:true,
            message:`Campo 'password' inválido`
        })
    }

    if(!validateEmail(email)) {
        res.status(400).json({
            error:true,
            message:`Campo 'email' inválido`
        })
    }

    next()
}

module.exports = checkEmailAndPasswordMiddiwares;