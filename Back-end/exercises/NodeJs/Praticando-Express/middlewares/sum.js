const sumMiddleware = (req, res, next) => {
    const { operacao, numero1, numero2 } = req.params
    console.log(operacao)
    if (operacao === 'soma') {
        res.send({
            result: numero1 + numero2
        })
    }

    next();
}

module.exports = sumMiddleware;