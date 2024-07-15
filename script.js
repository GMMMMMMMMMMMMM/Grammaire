const questionContainer = document.getElementById('question');
const explanationContainer = document.getElementById('explanation');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const scoreContainer = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;
let questions = [];

function loadQuestions() {
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * grammarRules.length);
        questions.push(grammarRules[randomIndex]);
    }
}

function startQuiz() {
    resultContainer.classList.add('hide');
    loadQuestions();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.rule;
    explanationContainer.innerText = question.explanation;
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(button);
    });
}

function selectOption(option) {
    if (option.correct) {
        score++;
    }
    nextButton.classList.remove('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        showResults();
    }
}

function showResults() {
    questionContainer.classList.add('hide');
    explanationContainer.classList.add('hide');
    optionsContainer.classList.add('hide');
    nextButton.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreContainer.innerText = `${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questions = [];
    questionContainer.classList.remove('hide');
    explanationContainer.classList.remove('hide');
    optionsContainer.classList.remove('hide');
    startQuiz();
}

document.addEventListener('DOMContentLoaded', startQuiz);
