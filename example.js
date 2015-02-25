var lib = require( "./lib/index.js" );

var words = lib.loadWordsFromFile( "./data/example.txt" );

console.log( lib.findAnagrams( words ) );
