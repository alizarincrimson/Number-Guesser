var min = 1;
var max = 100;
var initialMin = 1;
var initialMax = 100;
var updateBtn = document.querySelector("#update-button");
var submitBtn = document.querySelector("#submit-btn");
var clearBtn = document.querySelector("#clear-btn");
var resetBtn = document.querySelector("#reset-btn");

var chalOne; 
var chalTwo;
var guessOne;
var guessTwo;

var randomNumber = generateRandomNumber(initialMin, initialMax);

updateBtn.addEventListener('click', function(event) {
  event.preventDefault();
  min = parseInt(document.querySelector("#js-set-min").value);
  max = parseInt(document.querySelector("#js-set-max").value);
  randomNumber = generateRandomNumber(min, max);
  console.log(min, max);
  document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}.`;
  console.log(randomNumber);
}) 

document.querySelector("#js-name-challenger-one").addEventListener('keyup', function() {
  if (document.querySelector("#js-name-challenger-one").value !== "") {
    enableButton(submitBtn);
  } else {
    disableButton(submitBtn);
  }
})

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
  feedback();
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

function feedback() {
  if (guessOne > generateRandomNumber) {
    console.log("That's too high");
  }
  if (guessOne < generateRandomNumber) {
    console.log("That's too low");
  } else {
    console.log("BOOM");
  }
}
