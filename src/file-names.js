const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(filesArr) {
  const filesMap = {};
  return filesArr.map(fileName => {
    if (filesMap.hasOwnProperty(fileName)) {
      const nameCounter = filesMap[fileName];
      const newFileName = `${fileName}(${nameCounter})`;
      filesMap[fileName]++;
      filesMap[`${fileName}(${nameCounter})`] = 1;
      return newFileName;
    } else {
      filesMap[fileName] = 1;
      return fileName;
    }
  })
}

module.exports = {
  renameFiles
};
