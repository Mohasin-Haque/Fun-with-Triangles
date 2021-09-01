const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];

function calculateScore() {
  let score = 0;
  let index = 0;
  //formdata is used for fetchig data of form
  const formResults = new FormData(quizForm);
  // for of will take values
  // here.entries will take in which question whata is the answer
  //we have .values to konw the values clicked
  for (let value of formResults.values()) {
      if(value === correctAnswers[index]){
          score = score + 1;
      }
      index = index + 1;
  }
  outputEl.innerText = "Your score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);
