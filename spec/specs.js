describe("palindromes", function() {
  it("reverses the original string and compares to original for one word with no special characters", function() {
    expect(palindromes("tacocat")).to.equal(true)
  });

  it("can handle strings with multiple words", function() {
    expect(palindromes("Hello olleH")).to.equal(true)
  });

  it("can handle integers", function() {
    expect(palindromes("He11o o11eH")).to.equal(true)
  });

  it("says false when it's false", function() {
    expect(palindromes("palindrome")).to.equal(false)
  });


});
