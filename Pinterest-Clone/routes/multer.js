const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/uploads') //Destination Folder for Upload
    },
    filename: function (req, file, cb) {
      const uniquefilename = uuidv4() //generating unique name using uuid
      cb(null, uniquefilename + path.extname(file.originalname)) //using the unique file name for the upload file
    }
  });
  
  const upload = multer({ storage: storage })

  module.exports= upload;