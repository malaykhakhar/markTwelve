const quizForm = document.querySelector(".quiz");
const submitButton = document.querySelector("#submit-btn");
const output = document.querySelector(".output");

var correctAnswers = ["90°", "right angled", "isosceles triangle", "180°"];

function calculateScore() {
  var score = 0;
  var index = 0;
  const quizResults = new FormData(quizForm);
  for (let value of quizResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  output.innerText = "Your score is " + score + "/" + correctAnswers.length;
}

submitButton.addEventListener("click", calculateScore);