var StringWrapper = require("./StringWrapper.js");

function findSimilarSounding(words){
  var wrapped_words;

  wrapped_words = words.map(function(w){
    var wrapped = new StringWrapper(w);
    wrapped.doubleMetaphone();
    return wrapped;
  });

}

module.exports = exports = findSimilarSounding;
