$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    //Userinput convert to Array
    var sentenceInput = $("input#sentence").val().toLowerCase();
    var sentenceArr = sentenceInput.split("");
    console.log(sentenceArr);

    //filter special characters
    var sentenceArrFilter = [];

    ["o", "n", "e", " ", "t", "h", "a", "t", " ", "l", "i", "s", "t", "s", " ", "w", "a", "r", "n", "i", "n", "g", " ", "s", "i", "g", "n", "s", " ", "o", "f", " ", "b", "e", "i", "n", "g", " ", "n", "e", "g", "a", "t", "i", "v", "e", "l", "y", " ", "a", "f", "f", "e", "c", "t", "e", "d", " "]

    // loop through sentenceArr and specail Characrers

    var spcialCharacters = ["."," ",",","!","?","-","@","#","$"];

    for (var i=0; i< sentenceArr.length; i++) {
      var isSpecialChara = false;
      for (var j=0; j< spcialCharacters.length; j++) {
        if (sentenceArr[i] !== spcialCharacters[j]) {
          isSpecialChara = true;
          sentenceArrFilter.push(sentenceArr[i]);
        } else {
          isSpecialChara = true;
        }
      }
    }

    console.log(sentenceArrFilter);



  });
});
