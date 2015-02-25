# anagrams
find anagrams and similar sounding words

## Run the example

```js
node example.js
```

## Unit Tests

Run tests via the command `npm test`

## API

### findAnagrams(words)
For the input array of `words`, words which are anagrams are grouped together. The function returns an array of arrays, with each inner array corresponding to a set of anagrams.

Example:
```js
lib.findAnagrams( [stop, post, mundane, unarmed, manured,
unnamed]);
/*
  returns  
  [
    [ 'mundane', 'unnamed' ],
    [ 'unarmed', 'manured' ],
    [ 'stop', 'post' ]
  ]
*/
```

### findSimilarSounding(words)
Similar to `findAnagrams`, but groups together words via the *Double Metaphone*

### loadWordsFromFile(filename)
Loads synchronously a \*.txt file from disk which is assumed to have a single word on each line. The function returns an array of all the words.

### findAnagramsOf(word, anagrams)
To solve the related problem of finding all anagrams of a given word, the
function findAnagram is implemented. The second parameter `anagrams` expects
an output of `findAnagrams()`, which is used in searching for anagrams of the
supplied `word`.

Example:
```js
var words = lib.loadWordsFromFile("./data/big-wordlist.txt");
var anagrams = lib.findAnagrams(word);
lib.findAnagramsOf("spot", anagrams);
// returns [ 'stop', 'pots', 'tops', 'post', 'spot' ]
```
