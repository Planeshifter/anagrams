var StringWrapper = require("./StringWrapper.js");
var _ = require("lodash");

/*
  private function:
  processWords(words, type, sortFun, reduceFun)
  called by findAnagrams and findSimilarSounding, does most of the
  heavy work.
  If parameter type is passed the value `anagrams`,
  the implemented algorithm first permutes the characters of
  the inputted words to be in ascending order (starting from a-z),
  and then sorts the array via the supplied `sortFun`
  such that its elements are in increasing
  order, too. This allows us to only check whether neighboring elements
  are anagrams. The comparison and construction of the anagram group
  is done via a reduce operation, which uses the argument passed to
  the `reduceFun` parameter. If type="similarSounding", a similar
  sequence of operations is performed, except that the function deals
  with the sound codes as extracted by the Duble Metaphone algorithm instead
  of the re-arranged word strings.
  @param{Array} words
  @param{String} type
  @param{Function} sortFun
  @param{Function} reduceFun
  @returns{Array}
*/
function processWords(words, type, sortFun, reduceFun){
  var wrapped_words;

  wrapped_words = words.map(function(w){
    var wrapped = new StringWrapper(w);
    if(type === "anagrams"){
      wrapped.sort();
    }
    else if (type === "similarSounding"){
      wrapped.doubleMetaphone();
    }
    return wrapped;
  });
  wrapped_words.sort(sortFun);
  wrapped_words = wrapped_words.reduce(reduceFun, []);

  for (var i = 0; i < wrapped_words.length; i++){
    for (var j = 0; j < wrapped_words[i].length; j++){
      wrapped_words[i][j] = wrapped_words[i][j].original;
    }
    wrapped_words[i] = _.uniq(wrapped_words[i]);
  }
  
  i = wrapped_words.length - 1;
  while(i >= 0){
    if( wrapped_words[i][0] === "" ) {
      wrapped_words.splice(i, 1);
    }
    i--;
  }
  return wrapped_words;
}

module.exports = exports = processWords;
