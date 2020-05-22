const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) return callback(err);
    let arr = [];
    files.forEach((file) => {
      if (path.extname(file) === `.${ext}`) {
        arr.push(file);
      }
    })
    callback(null, arr);
  })

}

