const questions = [
    { question: "¿Cuál es la capital de Francia?", answers: ["Madrid", "París", "Berlín"], correct: 1 },
    { question: "¿Qué es el ADN?", answers: ["Ácido desoxirribonucleico", "Ácido ribonucleico", "Proteína"], correct: 0 },
    { question: "¿Quién pintó la Mona Lisa?", answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"], correct: 1 },
    // Agregar más preguntas hasta un total de 30
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function startGame() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    document.getElementById('start-btn').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');

    questionElement.textContent = questionData.question;
    answerButtons.innerHTML = ''; // Limpiar respuestas anteriores

    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answerButtons.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    if (selectedIndex === questionData.correct) {
        correctAnswers++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    const score = (correctAnswers / questions.length) * 100;

    if (score > 70) {
        resultElement.textContent = `¡Felicidades! Has respondido correctamente ${correctAnswers} de ${questions.length} preguntas.`;
    } else {
        resultElement.textContent = `Tu puntaje es ${score}%. Intenta nuevamente.`;
    }

    document.getElementById('start-btn').style.display = 'block';
    document.getElementById('start-btn').textContent = 'Reintentar';
}
