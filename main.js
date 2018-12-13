var min = 1;
var max = 100;
var updateBtn = document.querySelector("#update-button");
var submitBtn = document.querySelector("#submit-btn");
var clearBtn = document.querySelector("#clear-btn");
var resetBtn = document.querySelector("#reset-btn");

var minInput = document.querySelector("#js-set-min");
var maxInput = document.querySelector("#js-set-max");
var chalOne = document.querySelector("#js-name-challenger-one");
var chalTwo = document.querySelector("#js-name-challenger-two");
var guessOne = document.querySelector("#js-guess-challenger-one");
var guessTwo = document.querySelector("#js-guess-challenger-two");

var chalOneFeedback = document.querySelector("#js-chal-one-feedback").value;
var chalTwoFeedback = document.querySelector("#js-chal-two-feedback").value;

var randomNumber = generateRandomNumber(min, max);

updateBtn.disabled = true;
clearBtn.disabled = true;
resetBtn.disabled = true;
submitBtn.disabled = true;

updateBtn.addEventListener('click', function(event) {
  event.preventDefault();
  min = parseInt(document.querySelector("#js-set-min").value);
  max = parseInt(document.querySelector("#js-set-max").value);
  rangeError()
  randomNumber = generateRandomNumber(min, max);
  if (min > max) {
  document.querySelector(".display-range").innerText = `The Current Range is 1 to 100.`;  
  } else {
    document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}.`
  }
  console.log(randomNumber);
}) 

// Disable and enable button state

function disableOrEnableUpdate() {
  event.preventDefault();
  if (!minInput.value && !maxInput.value) {
    updateBtn.disabled = true;
  } else {
    updateBtn.disabled = false;
  }
}

function disableorEnableSubmit() {
  event.preventDefault();
  if (!chalOne.value && !chalTwo.value && !guessOne.value && !guessTwo.value) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

function disableOrEnableButton() {
  event.preventDefault();
  if (!chalOne.value && !chalTwo.value && !guessOne.value && !guessTwo.value) {
    clearBtn.disabled = true;
    resetBtn.disabled = true;
  } else {
    clearBtn.disabled = false;
    resetBtn.disabled = false;
  }
}

// function enableButton(button) {
//   button.disabled = false;
// }

// Keystroke events input fields

minInput.addEventListener('keyup', function() {
  disableOrEnableUpdate();
})

// maxInput.addEventListener('keyup', function() {
//   disableOrEnableUpdate();
// })

chalOne.addEventListener('keyup', function() {
  disableOrEnableButton();
})

chalTwo.addEventListener('keyup', function() {
  disableOrEnableButton();
})

guessOne.addEventListener('keyup', function() {
  disableOrEnableButton();
})

guessTwo.addEventListener('keyup', function() {
  disableOrEnableButton();
  disableorEnableSubmit();
})

// document.querySelector("#js-name-challenger-two").addEventListener('keyup', function() {
//   if (document.querySelector("#js-name-challenger-two").value !== "") {
//     enableButton(resetBtn);
//   } else {
//     disableButton(resetBtn);
//   }
// })

// document.querySelector("#js-guess-challenger-one").addEventListener('keyup', function() {
//   if (document.querySelector("#js-guess-challenger-one").value !== "") {
//     enableButton(resetBtn);
//   } else {
//     disableButton(resetBtn);
//   }
// })

// document.querySelector("#js-guess-challenger-two").addEventListener('keyup', function() {
//   if (document.querySelector("#js-guess-challenger-two").value !== "") {
//     enableButton(resetBtn);
//   } else {
//     disableButton(resetBtn);
//   }
// })


// Button functions and states

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  chalOne = document.querySelector("#js-name-challenger-one").value;
  chalTwo = document.querySelector("#js-name-challenger-two").value;
  guessOne = document.querySelector("#js-guess-challenger-one").value;
  guessTwo = document.querySelector("#js-guess-challenger-two").value;
  console.log(chalOne, chalTwo, guessOne, guessTwo);
  document.querySelector("#js-name-update-one").innerText = chalOne;
  document.querySelector("#js-name-update-two").innerText = chalTwo;
  document.querySelector("#js-guess-update-one").innerText = guessOne;
  document.querySelector("#js-guess-update-two").innerText = guessTwo;
  feedbackOne();
  feedbackTwo();
  guessErrorOne();
  guessErrorTwo();
  // disableOrEnableButton();
})

clearBtn.addEventListener('click', function(event) {
  // parseInt(guessOne) = null;
  // guessTwo.value = null;
  // console.log(guessOne.value);
  // guessOne.value = '';
  // guessTwo.value = '';
  event.preventDefault();
  document.querySelector("#js-guess-challenger-one").value = '';
  document.querySelector("#js-guess-challenger-two").value = '';
  document.querySelector("#js-guess-error-one").innerText = null;
  document.querySelector("#js-guess-error-two").innerText = null;
  // disableOrEnableButton();
})

resetBtn.addEventListener('click', function(event) {
  event.preventDefault();
  refresh();
  document.querySelector("#js-set-min").value = null;
  document.querySelector("#js-set-max").value = null;
  document.querySelector("#js-name-challenger-one").value = null;
  document.querySelector("#js-name-challenger-two").value = null;
  document.querySelector("#js-guess-challenger-one").value = null;
  document.querySelector("#js-guess-challenger-two").value = null;
  document.querySelector("#js-guess-error-one").innerText = null;
  document.querySelector("#js-guess-error-two").innerText = null;
  document.querySelector(".display-range").innerText = `The Current Range is 1 to 100.`;  
  // disableOrEnableButton();
});

// End of Button functions and states

function refresh() {
  document.querySelector("#js-set-min").value = "";
  document.querySelector("#js-set-max").value = "";
  randomNumber = generateRandomNumber(min, max);
  console.log(min);
  // document.querySelector(".display-range").innerText = `The Current Range is 1 to 100.`;
  console.log(randomNumber);
}

window.onload = function () {
  randomNumber = generateRandomNumber(min, max);
  disableOrEnableButton();
  document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}.`;
  console.log(randomNumber);
  document.querySelector("#js-guess-error-one").innerText = null;
}

function generateRandomNumber(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// function disableButton(button) {
//   button.disabled = true;
// } 

// function enableButton(button) {
//   button.disabled = false;
// }

// Added this

function feedbackOne() {
  if (guessOne > randomNumber) {
    document.querySelector("#js-chal-one-feedback").innerText = "That's too high!";
  } else if (guessOne < randomNumber) {
    document.querySelector("#js-chal-one-feedback").innerText = "That's too low!";
  } else {
    document.querySelector("#js-chal-one-feedback").innerText = "BOOM";
    winnerOne();
  }
}

function feedbackTwo() {
  if (guessTwo > randomNumber) {
    document.querySelector("#js-chal-two-feedback").innerText = "That's too high!";
  } else if (guessTwo < randomNumber) {
    document.querySelector("#js-chal-two-feedback").innerText = "That's too low!";
  } else {
    document.querySelector("#js-chal-two-feedback").innerText = "BOOM";
    winnerTwo();
  }
}

function guessErrorOne() {
  if (guessOne < min || guessOne > max) {
    document.querySelector("#js-guess-error-one").innerText = `${guessOne} is not within set range.`;
  }
}

function guessErrorTwo() {
  if (guessTwo < min || guessTwo > max) {
    document.querySelector("#js-guess-error-two").innerText = `${guessTwo} is not within set range.`;
  }
}

function rangeError() {
  if(min > max) {
    // alert("Your min range cannot be higher than your max range.")
    refresh();
    alert("Your min range cannot be higher than your max range.")
  }
}

function winnerOne() {
  event.preventDefault();
  var winnerContainer = document.querySelector(".section-two");
  winnerContainer.insertAdjacentHTML('afterbegin', '<article class="card"><ul class="versus"><li "chalOne">Challenger 1</li><li> vs. </li><li "chalTwo">Challenger 2</li></ul><div class="winner">Challenger 1 Wins!</div></article>')
}

function winnerTwo() {
  event.preventDefault();
  var winnerContainer = document.querySelector(".section-two");
  winnerContainer.insertAdjacentHTML('afterbegin', '<article class="card"><ul class="versus"><li "chalOne">Challenger 1</li><li> vs. </li><li>Challenger 2</li></ul><div class="winner">Challenger 2 Wins!</div></article>')
}
