const multer = require('multer');
const { imagesUploadPath } = require('../../config');
const MAX_FILE_SIZE = 10*1024*1024;
const allowedTypes = [
  'image/jpeg',
  'image/png',
];

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, imagesUploadPath);
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}`)
  }
});

const fileFilter = (req, file, cb) => {
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(null, false);
  }
  if (file.size > MAX_FILE_SIZE) {
    return cb(null, false);
  }
  return cb(null, true);
};

module.exports = multer({
  storage,
  fileFilter
});
