var min = 0;
var max = 100;
var rangeBtn = document.querySelector("#update-range-button");

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

var chalOne = undefined;
var chalTwo = undefined;
var guessBtn = document.querySelector("#submit-btn");

guessBtn.addEventListener('click', function(event) {
  event.preventDefault();
  chalOne = document.querySelector("#js-name-challenger-one").value;
  chalTwo = document.querySelector("#js-name-challenger-two").value;
  guessOne = document.querySelector("#js-guess-challenger-one").value;
  guessTwo = document.querySelector("#js-guess-challenger-two").value;
  console.log(chalOne, chalTwo, guessOne, guessTwo);
})

var clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector("#js-guess-challenger-one").value = null;
  document.querySelector("#js-guess-challenger-two").value = null;
})

var resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector("#js-set-min").value = null;
  document.querySelector("#js-set-max").value = null;
  document.querySelector("#js-name-challenger-one").value = null;
  document.querySelector("#js-name-challenger-two").value = null;
  document.querySelector("#js-guess-challenger-one").value = null;
  document.querySelector("#js-guess-challenger-two").value = null;
})

// not working yet
function disableClear() {
  if (document.getElementById("js-name-challenger-one").value==="") {
    document.getElementById("clear-btn").disabled = true;
  }
}