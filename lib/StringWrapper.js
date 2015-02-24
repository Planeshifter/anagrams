var doubleMetaphone = require('double-metaphone');

function StringWrapper(str) {
    this.original = str.toLowerCase();
    this.length = str.length;
    this.sorted = null;
    this.sound_codes = null;
}

StringWrapper.prototype.sort = function(){
  this.sorted = this.original
    .split("")
    .sort(function(a, b){
      return a > b ? 1 : (a < b ? -1 : 0);
    })
    .join("");
};

StringWrapper.prototype.doubleMetaphone = function(){
  this.sound_codes = doubleMetaphone( this.original );
};

module.exports = exports = StringWrapper;
