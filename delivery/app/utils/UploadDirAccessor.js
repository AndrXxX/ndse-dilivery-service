const fs = require("fs");
const path = require("path");
const { imagesUploadPath } = require("../config");

const catchOnError = (func) => {
  try {
    func();
    return true;
  } catch (e) {
    return false;
  }
}

const checkAccess = (file) => {
  return catchOnError(() => fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK));
}

const createUploadDirs = () => {
  const paths = [
    path.join(__dirname, "../", imagesUploadPath),
  ];
  paths.forEach(function (path) {
    if (checkAccess(path)) {
      return true;
    }
    const createDirFunc = () => fs.mkdirSync(path, { recursive: true });
    return catchOnError(createDirFunc);
  });
}

module.exports = {
  checkAccess: checkAccess,
  createUploadDirs: createUploadDirs,
}
