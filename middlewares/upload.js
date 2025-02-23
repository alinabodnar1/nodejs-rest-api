const multer = require("multer");
const path = require("path");

const tmpDir = path.join(__dirname, "../", "tmp"); // Users/alinka/Desktop/NODE/HW/nodejs-rest-api/tmp

// налаштовуємо об'єкт налаштувань для multer
const multerConfig = multer.diskStorage({
  destination: tmpDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// мідлвара
const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
