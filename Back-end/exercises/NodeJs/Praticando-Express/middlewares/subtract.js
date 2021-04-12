const subtractMiddleware = (req, res, next) => {
    const { operacao, numero1, numero2 } = req.params;
    if (operacao === 'subtracao') {
        res.send({
            result: numero1 - numero2
        })
    }

    next();
}

module.exports = subtractMiddleware;