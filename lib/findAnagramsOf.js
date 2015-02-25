var sortChars = require("./sortChars.js");

/*
  findAnagramOf(word, anagrams)
  finds all anagrams of `word` that are present in `anagrams`.
  @param{String} word - the word for which anagrams should be returned
  @param{Array} anagrams - array of arrays where the inner arrays group
  words together that are anagrams of each other (result of calling findAnagrams
  function).
  @returns{Array} an Array of all anagrams of `word` that are present
  in `anagrams`
*/
function findAnagramOf(word, anagrams){
  var dict = {}, word_sorted, res = [];

  /*
  create simple dictionary hash table where the keys are the sorted
  strings of the words, so that we can retrieve all synsets for the supplied
  word via a simple key lookup. 
  */
  for(var i = 0; i < anagrams.length; i++){
    var sorted = sortChars(anagrams[i][0]);
    dict[sorted] = anagrams[i];
  }

  word_sorted = sortChars(word);
  if( word_sorted in dict ){
    res = dict[word_sorted];
  }
  return res;
}


module.exports = exports = findAnagramOf;
