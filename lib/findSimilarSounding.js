var processWords = require("./processWords.js");

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
      if ( last.sound_codes[0] === b.sound_codes[0] &&
      last.sound_codes[1] === b.sound_codes[1] ){
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
