$(document).ready(function() {
  $("form").submit(function(event) {
    var wordInput = $("#word").val();
    wordArray = wordInput.split("");
    var wordArrayReversed = wordArray.reverse();
    wordReversed = wordArrayReversed.join("");
    console.log(wordReversed);
    var result = false;
    if (wordInput === wordReversed) {
      result = true;
    }
    console.log(result);

    // console.log(wordArrayReversed);
    // for (var i=0; i<wordArray.length; i++) {
    //   for (var j=0;j<wordArrayReversed.length; j++) {
    //     if (wordArray[i] === wordArrayReversed[j]) {
    //       console.log("This is palindrome");
    //     } else {
    //       console.log("This is not palindrome");
    //     }
    //   }
    // }


    event.preventDefault();
  });
});
