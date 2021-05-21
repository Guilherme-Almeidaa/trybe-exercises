const multiplyMiddlerware = (req, res, next) => {
    const { operacao, numero1, numero2 } = req.params;
    if (operacao === 'multiplicacao') {
        res.send({
            result: numero2 * numero1
        })
    }

    next();
}

module.exports = multiplyMiddlerware;