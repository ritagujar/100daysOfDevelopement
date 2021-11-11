const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");

const questionElement = document.getElementById("question");
const answerButtonsElements = document.getElementById("answer-button");

let shuffledQuestion, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Started");
  startButton.classList.add("hide");
  shuffledQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerHTML = question.question;
}

function selectAnswer() {}

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
];
