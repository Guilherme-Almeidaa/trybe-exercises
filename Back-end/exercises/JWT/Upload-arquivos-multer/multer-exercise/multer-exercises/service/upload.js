const multer = require('multer');
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, _file, callback) => {
        
        callback(null, `${__dirname}/uploads`);

    },
    filename: (_req, file, callback) => {
        callback(null, `${Date.now()} - ${file.originalname}`)
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const nameFile = file.originalname
        const fileValidate = fs.readdirSync(`${__dirname}/uploads`)

        if (fileValidate.some(files => files.includes(nameFile))) {
            const error = {
                statusCode: 409,
                message: "File already exists"
            }
            return cb(error, false)
        }
        if (file.mimetype !== 'image/png') {
            const error = {
                statusCode: 403,
                message: "Extension must be `png`"
            }
            return cb(error, false)
        }


        cb(null, true)
    }
});

const uploads = multer({ dest: `${__dirname}/uploads` })
const uploadsProfile = multer({ dest: `${__dirname}/profilePic` })

module.exports = {
    upload,
    uploads,
    uploadsProfile
};