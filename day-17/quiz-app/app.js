const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");

const questionElement = document.getElementById("question");
const answerButtonsElements = document.getElementById("answer-button");

let shuffledQuestion, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerHTML = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    answerButtonsElements.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElements.firstChild) {
    answerButtonsElements.removeChild(answerButtonsElements.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElements.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (shuffledQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerHTML = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "8", correct: false },
      { text: "12", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What is 2 * 2?",
    answers: [
      { text: "4", correct: true },
      { text: "8", correct: false },
      { text: "12", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "What is 10 / 2?",
    answers: [
      { text: "4", correct: false },
      { text: "8", correct: false },
      { text: "12", correct: false },
      { text: "5", correct: true },
    ],
  },
  {
    question: "What is 10 % 5?",
    answers: [
      { text: "4", correct: false },
      { text: "3", correct: false },
      { text: "0", correct: true },
      { text: "1", correct: false },
    ],
  },
];
