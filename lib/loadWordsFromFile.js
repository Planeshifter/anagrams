var fs = require("fs");

/*
  loadWordsFromFile(filename)
  utility function to load words from a *.txt file in which
  words are separated by line breaks.
  @param{String} filename - filename (+ relative path)
  @returns{Array} array of extracted words
*/
function loadWordsFromFile(filename){
  return fs.readFileSync(filename).toString().split("\n");
}

module.exports = exports = loadWordsFromFile;
