
const checkNameMiddiware = (req, res, next) => {
    const { firstName, lastName } = req.body;
    if (!firstName) {
        res.status(400).json({
            error:true,
            message:`Precisa informar o campo firstName`
        })
    }
    if (firstName.length < 3) {
        res.status(400).json({
            error:true,
            message:`O campo firstName deve ter pelo menos 3 caracteres`
        })
    }

    if (typeof firstName !== 'string') {
        res.status(400).json({
            error:true,
            message:`O campo firstName esta inválido`
        })
    }

    if (!lastName) {
        res.status(400).json({
            error:true,
            message:`Precisa informar o campo lastName`
        })
    }
    if (lastName.length < 3) {
        res.status(400).json({
            error:true,
            message:`O campo lastName deve ter pelo menos 3 caracteres`
        })
    }

    if (typeof lastName !== 'string') {
        res.status(400).json({
            error:true,
            message:`O campo lastName esta inválido`
        })
    }

    next()
}

module.exports = checkNameMiddiware;