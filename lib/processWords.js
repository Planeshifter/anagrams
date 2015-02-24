var StringWrapper = require("./StringWrapper.js");

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
  }
  return wrapped_words;
}

module.exports = exports = processWords;
