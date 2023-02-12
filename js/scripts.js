window.addEventListener('load', function() {
  const userInput = document.getElementById("userInput");
  const results = document.getElementById('results');
  const submitButton = document.getElementById('submitButton');
  const tryAgain = document.getElementById('tryAgain');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Submitted?!?!?');

    const beepBoopSentence = beepBoop(parseInt(userInput.value));
    results.innerHTML = beepBoopSentence;
    submitButton.style.display = "none";
    tryAgain.style.display = "block";
    userInput.value = '';
  });

  tryAgain.addEventListener('click', function() {
    location.reload();
  });

  function beepBoop(number) {
    let result = [];
    for (let i = 0; i <= number; i++) {
      if (i.toString().includes("3")) {
        result.push("Wont you be my neighbor?");
      } else if (i.toString().includes("2")) {
        result.push("Boop!");
      } else if (i.toString().includes("1")) {
        result.push("Beep!"); 
      } else {
        result.push(i);
      }
    } 
    return result.join(', ');
  }
});
