const multer = require('multer');

const storage = multer.diskStorage({
    destination: (_req, _file, callback) => {
        callback(null, `${__dirname}/uploads`);

    },
    filename: (_req, file, callback) => {
        callback(null, `${Date.now()} - ${file.originalname}`)
    }
});

const upload = multer({
    storage,
    //fileFilter: (req, file, cb) => {
       // if (file.mimetype !== 'image/png') {
///return cb(new Error("Extension must be `png`"),false)
//}
//cb(null, true)
  //  }
});

module.exports = upload;