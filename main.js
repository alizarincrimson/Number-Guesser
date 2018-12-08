var min = 0;
var max = 100;
var rangeBtn = document.querySelector("#update-range-button");

rangeBtn.addEventListener('click', function(event) {
  event.preventDefault();
  min = document.querySelector("#js-set-min").value;
  max = document.querySelector("#js-set-max").value;
  function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    console.log(min, max);
  }

  console.log(min, max);
  document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}`;
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

var resetBtn = document.querySelector("#reset-btn");

// resetBtn.addEventListener('click', function(event) {
//   event.preventDefault();
// });