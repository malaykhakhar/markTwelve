const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const checkButton = document.querySelector("#check-btn");
const output = document.querySelector(".output");

function calculateArea(firstSideValue, secondSideValue, thirdSideValue) {
  var semiPerimeter = (firstSideValue + secondSideValue + thirdSideValue) / 2;

  var area = Math.sqrt(semiPerimeter * (semiPerimeter - firstSideValue) * (semiPerimeter - secondSideValue) * (semiPerimeter - thirdSideValue));

  output.innerText = "The area of triangle is: " + area;
}


function checkValidTriangle() {
  var firstSideValue = Number(firstSide.value);
  var secondSideValue = Number(secondSide.value);
  var thirdSideValue = Number(thirdSide.value);

  if ((firstSideValue + secondSideValue > thirdSideValue) &&
    (secondSideValue + thirdSideValue > firstSideValue) &&
    (thirdSideValue + firstSideValue > secondSideValue)) {

    calculateArea(firstSideValue, secondSideValue, thirdSideValue);
  } else {
    output.innerText = "Enter valid values for sides.";
  }
}

checkButton.addEventListener("click", checkValidTriangle);