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
