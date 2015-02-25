var processWords = require("./processWords.js");

/*
  findSimilarSounding(words)
  finds similar sounding words inside supplied word list.
  Internally, the function only defines two functions,
  a sorter and reducer functions, and then
  calls the private function `processWords` to do the actual work.
  @param{Array} words - array of words
  @returns{Array} array of arrays in which similar sounding words
  are grouped together
*/
function findSimilarSounding(words){

  function sorter(a, b){
    if (a.sound_codes[0] > b.sound_codes[0]){
      return 1;
    } else {
      if(a.sound_codes[0] < b.sound_codes[0]){
        return -1;
      } else {
        return 0;
      }
    }
  }

  function reducer(acc, b){
    // first element is pushed no matter what:
    if( acc.length === 0 ){
      acc.push( Array(b) );
    } else {
      // for all other elements, we have:
      var last = acc[ acc.length - 1 ];
      if ( last[0].sound_codes[0] === b.sound_codes[0] &&
      last[0].sound_codes[1] === b.sound_codes[1] ){
        last.push(b);
      } else {
        acc.push( Array(b) );
      }
    }
    return acc;
  }

  return processWords(words, "similarSounding", sorter, reducer);
}

module.exports = exports = findSimilarSounding;
