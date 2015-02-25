function sortChars(word){
  return word.split("")
  .sort(function(a, b){
    return a > b ? 1 : (a < b ? -1 : 0);
  })
  .join("");
}

module.exports = exports = sortChars;
