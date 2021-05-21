const divideMiddleware = (req, res, next) => {
    const { operacao, numero1, numero2 } = req.params;
    if(operacao === 'divisao') {
        res.send({
            result:numero1 / numero2
        })
    }

    next();
}

module.exports = divideMiddleware;