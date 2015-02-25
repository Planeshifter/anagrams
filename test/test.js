var chai   = require('chai');
chai.use(require('chai-things'));
var expect = chai.expect;
var lib    = require("../lib/index.js");

describe("findAnagrams()", function tests(){

  it("is a function", function test(){
    expect(lib.findAnagrams).to.be.a("function");
  });

  it("correctly calculates anagrams for word array", function test(){

    var anagrams = lib.findAnagrams(["cat", "haste", "least", "steal"]);
    expect(anagrams).to.
    include.something.that.deep.equals(["least", "steal"]);

    expect(anagrams).to.
    include.something.that.deep.equals(["cat"]);

    expect(anagrams).to.
    include.something.that.deep.equals(["haste"]);

  });
});

describe("findSimilarSounding()", function test(){

  it("is a function", function test(){
    expect(lib.findSimilarSounding).to.be.a("function");
  });

  it("correctly groups together similar sounding words", function test(){

    var res = lib.findSimilarSounding(["waschington", "washington",
    "eisenhauer", "eisenhower"]);

    expect(res).to.include.something.that.deep.equals(["eisenhauer",
    "eisenhower"]);

    expect(res).to.include.something.that.deep.equals(["waschington",
    "washington"]);

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
