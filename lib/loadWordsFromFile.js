var fs = require("fs");

function loadWordsFromFile(filename){
  return fs.readFileSync(filename).toString().split("\n");
}

module.exports = exports = loadWordsFromFile;
