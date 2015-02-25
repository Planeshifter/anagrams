var lib = require( "./lib/index.js" );

var words = lib.loadWordsFromFile( "./data/example.txt" );

console.log("Output of grouped anagrams present in 'example.txt' file: ");
console.log( lib.findAnagrams( words ) );

var words = lib.loadWordsFromFile("./data/big-wordlist.txt");
var anagrams = lib.findAnagrams(words);

console.log("Anagrams of word 'spot': ");
console.log( lib.findAnagramsOf("spot", anagrams) );
