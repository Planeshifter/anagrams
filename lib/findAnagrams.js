var processWords = require("./processWords.js");

/*
  findAnagrams(words)
  @param{Array} words - array of words
  @returns{Array} array of grouped arrays made up of words which are
  anagrams of each other
*/
function findAnagrams(words){

  function sorter(a, b){
    return a.sorted > b.sorted ? 1 : (a.sorted < b.sorted ? -1 : 0);
  }
  function reducer(acc, b){
    // first element is pushed no matter what:
    if( acc.length === 0 ){
      acc.push( Array(b) );
    } else {
      // for all other elements, we have:
      var last = acc[ acc.length - 1 ];
      if ( last[0].sorted === b.sorted ){
        last.push(b);
      } else {
        acc.push( Array(b) );
      }
    }
    return acc;
  }

  return processWords(words, "anagrams", sorter, reducer);
}

module.exports = exports = findAnagrams;
