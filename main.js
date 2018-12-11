var min = 1;
var max = 100;
var initialMin = 1;
var initialMax = 100;
var updateBtn = document.querySelector("#update-button");
var submitBtn = document.querySelector("#submit-btn");
var clearBtn = document.querySelector("#clear-btn");
var resetBtn = document.querySelector("#reset-btn");

var chalOne = document.querySelector("#js-name-challenger-one").value;
var chalTwo = document.querySelector("#js-name-challenger-two").value;
var guessOne = document.querySelector("#js-guess-challenger-one").value;
var guessTwo = document.querySelector("#js-guess-challenger-two").value;

var chalOneFeedback = document.querySelector("#js-chal-one-feedback").value;
var chalTwoFeedback = document.querySelector("#js-chal-two-feedback").value;

var randomNumber = generateRandomNumber(initialMin, initialMax);

clearBtn.disabled = true;
resetBtn.disabled = true;

updateBtn.addEventListener('click', function(event) {
  event.preventDefault();
  min = parseInt(document.querySelector("#js-set-min").value);
  max = parseInt(document.querySelector("#js-set-max").value);
  randomNumber = generateRandomNumber(min, max);
  console.log(min, max);
  document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}.`;
  console.log(randomNumber);
}) 

// This section enables/disables Reset button

function disableButton() {
  event.preventDefault();
  if (chalOne.value === "" && chaltwo.value === "" && guessOne.value === "" && guessTwo.value === "") {
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

// document.querySelector("#js-name-challenger-one").addEventListener('keyup', function() {
//   if (chalOne.value === "" && chaltwo) {
//     enableButton(resetBtn);
//   } else {
//     disableButton(resetBtn);
//   }
// })

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



// End of Reset Button states

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  chalOne = document.querySelector("#js-name-challenger-one").value;
  chalTwo = document.querySelector("#js-name-challenger-two").value;
  guessOne = document.querySelector("#js-guess-challenger-one").value;
  guessTwo = document.querySelector("#js-guess-challenger-two").value;
  console.log(chalOne, chalTwo, guessOne, guessTwo);
  // removeClass();
  document.querySelector("#js-name-update-one").innerText = chalOne;
  document.querySelector("#js-name-update-two").innerText = chalTwo;
  document.querySelector("#js-guess-update-one").innerText = guessOne;
  document.querySelector("#js-guess-update-two").innerText = guessTwo;
  feedbackOne();
  feedbackTwo();
})

clearBtn.addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector("#js-guess-challenger-one").value = null;
  document.querySelector("#js-guess-challenger-two").value = null;
  // addClass();
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
});

function refresh() {
  randomNumber = generateRandomNumber(min, max);
  document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}.`;
  console.log(randomNumber);
}

window.onload = function () {
  randomNumber = generateRandomNumber(min, max);
  document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}.`;
  console.log(randomNumber);
}

function generateRandomNumber(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function disableButton(button) {
  button.disabled = true;
} 

function enableButton(button) {
  button.disabled = false;
}

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


// Generate winner card


function addCard() {
  var card = <article class="card">
       <ul class="versus">
          <li>chalOne.value</li>
          <li> vs </li>
          <li>chalTwo.value</li>
      </ul>
      <div class="winner">Winner</div>
      <ul class="stats">
        <li>guesses</li>
        <li>minutes</li>
        <li>icon</li>
      </ul>
     </article>
}
