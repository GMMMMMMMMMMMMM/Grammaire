const grammarRules = [
  {
    id: 1,
    rule: "Verb tenses: present simple",
    explanation: "The present simple tense is used to describe habits, general truths, and actions that happen regularly or repeatedly.",
    example: "I go to school every day.",
    illustration: "images/present_simple.jpg",
    options: [
      { text: "I go to school every day.", correct: true },
      { text: "I am going to school every day.", correct: false },
      { text: "I goes to school every day.", correct: false },
      { text: "I going to school every day.", correct: false }
    ]
  },
  // Ajoutez plus de règles ici avec 4 options...
];

let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = 10; // Nombre de questions par session

document.addEventListener("DOMContentLoaded", () => {
  showQuestion();
});

function showQuestion() {
  if (currentQuestionIndex < totalQuestions) {
    const question = grammarRules[currentQuestionIndex];
    document.getElementById("question").innerText = question.rule;
    document.getElementById("explanation").innerText = question.explanation;
    document.getElementById("example").innerText = question.example;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("option");
      button.onclick = () => checkAnswer(button, option.correct);
      optionsContainer.appendChild(button);
    });
  } else {
    showScore();
  }
}

function checkAnswer(button, isCorrect) {
  if (isCorrect) {
    score++;
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }

  setTimeout(() => {
    currentQuestionIndex++;
    showQuestion();
  }, 1000); // Attendre 1 seconde avant de passer à la question suivante
}

function showScore() {
  document.getElementById("quiz-container").innerHTML = `
    <h2>Quiz Finished!</h2>
    <p>Your score: ${score} out of ${totalQuestions}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}
