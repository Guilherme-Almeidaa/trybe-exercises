const errorMiddware = (err,req,res,next) => {
    if(res.error) {
        res.status(err.status).json({
            message:res.message
        })
    }
}

module.exports = errorMiddware;