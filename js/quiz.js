const questions = document.querySelectorAll(".quiz_question");
const resultBox = document.querySelector(".quiz_result");
const resultText = document.querySelector(".result_text");
const restartBtn = document.querySelector(".restart");

let currentQuestion = 0;
let score = 0;

function showQuestion(index) {
  questions.forEach((q) => q.classList.remove("active"));

  if (questions[index]) {
    questions[index].classList.add("active");
  }
}

document.querySelectorAll(".quiz_options button").forEach((button) => {
  button.addEventListener("click", () => {
    score += Number(button.dataset.score);
    currentQuestion++;

if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
    } else {
      showResult();
    }
  });
});

function showResult() {
  questions.forEach((q) => q.classList.remove("active"));
  resultBox.classList.remove("hidden");

  let message = "";
