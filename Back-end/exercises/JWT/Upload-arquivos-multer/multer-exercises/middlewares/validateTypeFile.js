const middlewareTypeFile = (req, res, next) => {
    if (req.file.mimetype !== 'image/png') {
        throw ({ statusCode: 403, message: "Extension must be `png`" })
    }
    next()
}
module.exports = middlewareTypeFile;