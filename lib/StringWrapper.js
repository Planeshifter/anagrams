var doubleMetaphone = require('double-metaphone');

/*
  String Wrapper( str )
  constructor function
  @param{String} str - string to be wrapped
  @return{StringWrapper} an instance of StringWrapper, which holds
  original string in attribute `original`.
*/
function StringWrapper(str) {
    this.original = str.toLowerCase();
    this.length = str.length;
    this.sorted = null;
    this.sound_codes = null;
}

/*
  .sort()
  method of StringWrapper which sorts the character of the string stored
  in `original` in ascending order of the letters in the alphabet and stores
  result in `sorted` attribute.
*/
StringWrapper.prototype.sort = function(){
  this.sorted = this.original
    .split("")
    .sort(function(a, b){
      return a > b ? 1 : (a < b ? -1 : 0);
    })
    .join("");
};

/*
  .doublePhone()
  method which gets the double metaphone codes for the wrapped string
  and stores them in .sound_codes property
*/
StringWrapper.prototype.doubleMetaphone = function(){
  this.sound_codes = doubleMetaphone( this.original );
};

module.exports = exports = StringWrapper;
