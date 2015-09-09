var palindromes = function(string) {
  var letters = string.split("")
  var lettersReversed = letters.slice().reverse()
  letters = letters.toString()
  lettersReversed = lettersReversed.toString()
  if (letters === lettersReversed) {
    return true
  } else {
    return false
  }
}


$(document).ready(function() {
  $("form#palindromes").submit(function(event) {
    var string = $("input#string").val()
    var result = palindromes(string)

    if (result === true)  {
      $("#true-false").text("This is a palindrome.")
    } else {
      $("#true-false").text("This ain't a palindrome.")
    }
  $("#result").show()
  event.preventDefault();
  })
})
