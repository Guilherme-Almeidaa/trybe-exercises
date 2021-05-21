const bookMiddleare = (req, res, next) => {
    const { title, author } = req.body;
    if (!title) {
        return res.status(400).json({
            message: "Informe o titulo"
        })
    }

    if (!author) {
        return res.status(400).json({
            message: "Informe o autor"
        })
    }

    next();
}

module.exports = bookMiddleare;