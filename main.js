var min = 0;
var max = 100;

var rangeBtn = document.querySelector("#update-range-button");
var guessBtn = document.querySelector("#submit-btn");
var clearBtn = document.querySelector("#clear-btn");
var resetBtn = document.querySelector("#reset-btn");

var chalOne = undefined;
var chalTwo = undefined;
var guessOne = undefined;
var guessTwo = undefined;


rangeBtn.addEventListener('click', function(event) {
  event.preventDefault();
  min = parseInt(document.querySelector("#js-set-min").value);
  max = parseInt(document.querySelector("#js-set-max").value);
  console.log(min, max);
  document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}.`;
  function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  console.log(generateRandomNumber(min, max));
}) 

guessBtn.addEventListener('click', function(event) {
  event.preventDefault();
  chalOne = document.querySelector("#js-name-challenger-one").value;
  chalTwo = document.querySelector("#js-name-challenger-two").value;
  guessOne = document.querySelector("#js-guess-challenger-one").value;
  guessTwo = document.querySelector("#js-guess-challenger-two").value;
  console.log(chalOne, chalTwo, guessOne, guessTwo);
  removeClass();
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
  addClass();
})

resetBtn.addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector("#js-set-min").value = null;
  document.querySelector("#js-set-max").value = null;
  document.querySelector("#js-name-challenger-one").value = null;
  document.querySelector("#js-name-challenger-two").value = null;
  document.querySelector("#js-guess-challenger-one").value = null;
  document.querySelector("#js-guess-challenger-two").value = null;
  document.querySelector(".display-range").innerText = `-`;
  addClass();
})

function removeClass() {
  document.getElementById("reset-btn").classList.remove("no-click");
  document.getElementById("clear-btn").classList.remove("no-click");
} 

function addClass() {
  document.getElementById("reset-btn").classList.add("no-click")
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
