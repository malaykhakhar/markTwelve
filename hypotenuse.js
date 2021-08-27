const input = document.querySelectorAll(".input");
const checkButton = document.querySelector("#check-btn");
const output = document.querySelector(".output");

function calculateSum(a, b) {
  var sumOfSides = a * a + b * b;
  return (sumOfSides);
}

function calculateHypotenuse() {
  var sum = calculateSum(Number(input[0].value), Number(input[1].value));
  var hypotenuse = Math.sqrt(sum);

  output.innerText = "The length of hypotenuse is " + hypotenuse;
}

checkButton.addEventListener("click", calculateHypotenuse);