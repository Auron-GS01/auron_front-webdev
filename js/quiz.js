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

if (score <= 2) {
    message =
      "Alto risco: sua infraestrutura está vulnerável a eventos solares.";
  } else if (score <= 4) {
    message =
      "Risco moderado: existem pontos críticos que precisam de atenção.";
  } else {
    message =
      "Baixo risco: sua operação está bem preparada para eventos extremos.";
  }

  resultText.textContent = message;
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;

    resultBox.classList.add("hidden");
    showQuestion(0);
});
