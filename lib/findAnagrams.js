var StringWrapper = require("./StringWrapper.js");

function findAnagrams(words){
  var wrapped_words;

  wrapped_words = words.map(function(w){
    var wrapped = new StringWrapper(w);
    wrapped.sort();
    return wrapped;
  });
  wrapped_words.sort(function(a, b){
    return a.sorted > b.sorted ? 1 : (a.sorted < b.sorted ? -1 : 0);
  });
  wrapped_words = wrapped_words.reduce(function(acc, b){
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
  }, []);
  for (var i = 0; i < wrapped_words.length; i++){
    for (var j = 0; j < wrapped_words[i].length; j++){
      wrapped_words[i][j] = wrapped_words[i][j].original;
    }
  }
  return wrapped_words;
}

module.exports = exports = findAnagrams;
