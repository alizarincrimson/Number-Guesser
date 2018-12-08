var min = 0;
var max = 100;
var rangeBtn = document.querySelector("#update-range-button");

rangeBtn.addEventListener('click', function(event) {
  event.preventDefault();
  min = document.querySelector("#js-set-min").value;
  max = document.querySelector("#js-set-max").value;
  console.log(min, max);
  document.querySelector(".display-range").innerText = `The Current Range is ${min} to ${max}`;
})
