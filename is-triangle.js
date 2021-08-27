const input = document.querySelectorAll(".input");
const checkButton = document.querySelector("#check-btn");
const output = document.querySelector(".output");

function calculateSum(angle1, angle2, angle3) {
  var sum = angle1 + angle2 + angle3;
  return (sum);
}

function isTriangle() {
  var sum = calculateSum(Number(input[0].value), Number(input[1].value), Number(input[2].value));
  if (sum === 180) {
    output.innerText = "It is triangle";
  } else {
    output.innerText = "It is not triangle.";
  }
}

checkButton.addEventListener("click", isTriangle);