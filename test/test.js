var chai   = require('chai');
chai.use(require('chai-things'));
var expect = chai.expect;
var lib    = require("../lib/index.js");

describe("findAnagrams()", function tests(){
  
  it("is a function", function test(){
    expect(lib.findAnagrams).to.be.a("function");
  });

  it("correctly calculates anagrams for word array", function test(){

    expect(lib.findAnagrams(["cat", "haste", "least", "steal"])).to.
    include.something.that.deep.equals(["least", "steal"]);

    expect(lib.findAnagrams(["cat", "haste", "least", "steal"])).to.
    include.something.that.deep.equals(["cat"]);

    expect(lib.findAnagrams(["cat", "haste", "least", "steal"])).to.
    include.something.that.deep.equals(["haste"]);

  });
});

describe("findSimilarSounding()", function test(){
  it("is a function", function test(){
    expect(lib.findSimilarSounding).to.be.a("function");
  });
  it("correctly groups together similar sounding words", function test(){

  });
});

describe("StringWrapper()", function tests(){
  it("is a constructor function", function test(){
    expect(lib.StringWrapper).to.be.a("function");
  });
  it("creates instances of StringWrapper", function test(){
    var wrapped = new lib.StringWrapper("I am getting wrapped");
    expect(wrapped instanceof lib.StringWrapper).to.be.equal(true);
  });
});
