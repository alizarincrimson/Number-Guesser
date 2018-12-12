var min = 1;
var max = 100;
var updateBtn = document.querySelector("#update-button");
var submitBtn = document.querySelector("#submit-btn");
var clearBtn = document.querySelector("#clear-btn");
var resetBtn = document.querySelector("#reset-btn");

var chalOne = document.querySelector("#js-name-challenger-one");
var chalTwo = document.querySelector("#js-name-challenger-two");
var guessOne = document.querySelector("#js-guess-challenger-one");
var guessTwo = document.querySelector("#js-guess-challenger-two");

var chalOneFeedback = document.querySelector("#js-chal-one-feedback").value;
var chalTwoFeedback = document.querySelector("#js-chal-two-feedback").value;

var randomNumber = generateRandomNumber(min, max);

clearBtn.disabled = true;
resetBtn.disabled = true;

updateBtn.addEventListener('click', function(event) {
  event.preventDefault();
  min = parseInt(document.querySelector("#js-set-min").value);
  max = parseInt(document.querySelector("#js-set-max").value);
  rangeError()
  randomNumber = generateRandomNumber(min, max);
  console.log(min, max);
  document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}.`;
  console.log(randomNumber);
}) 

// Disable and enable button state

function disableOrEnableButton() {
  event.preventDefault();
  if (!chalOne.value && !chalTwo.value && !guessOne.value && !guessTwo.value) {
    console.log("hello");
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
  guessErrorOne()
  guessErrorTwo()
  // disableOrEnableButton();
})

clearBtn.addEventListener('click', function(event) {
  event.preventDefault();
  // parseInt(guessOne) = null;
  // guessTwo.value = null;
  // console.log(guessOne.value);
  document.querySelector("#js-guess-challenger-one").value = null;
  document.querySelector("#js-guess-challenger-two").value = null;
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
  // disableOrEnableButton();
});

// End of Button functions and states

function refresh() {
  randomNumber = generateRandomNumber(min, max);
  document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}.`;
  console.log(randomNumber);
}

window.onload = function () {
  randomNumber = generateRandomNumber(min, max);
  disableOrEnableButton();
  document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}.`;
  console.log(randomNumber);
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

  }
}

function feedbackTwo() {
  if (guessTwo > randomNumber) {
    document.querySelector("#js-chal-two-feedback").innerText = "That's too high!";
  } else if (guessTwo < randomNumber) {
    document.querySelector("#js-chal-two-feedback").innerText = "That's too low!";
  } else {
    document.querySelector("#js-chal-two-feedback").innerText = "BOOM";
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
    console.log("error")
    document.querySelector("#js-range-error").innerText = "Your min range cannot be higher than your max range."
  }
}

// Generate winner card
// // // innerHTML ???


// // function addCard() {
// //   var card = <article class="card">
// //        <ul class="versus">
// //           <li>chalOne.value</li>
// //           <li> vs </li>
// //           <li>chalTwo.value</li>
// //       </ul>
// //       <div class="winner">Winner</div>
// //       <ul class="stats">
// //         <li>guesses</li>
// //         <li>minutes</li>
// //         <li>icon</li>
// //       </ul>
//      </article>
// }
