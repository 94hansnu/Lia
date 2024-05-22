
const playAgainBtn = document.querySelector('.play-again');
const exitBtn = document.querySelector('.exit');

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve name and results from local storage
    const userName = localStorage.getItem('userName');
    const quizResults = JSON.parse(localStorage.getItem('quizResults'));

    // Calculate the total number of questions
    const totalQuestions = quizResults.correct + quizResults.incorrect;

    // Update the result texts using querySelector
    document.querySelector('#resultText').textContent = `Här är din resultat ${userName}`;
    document.querySelector('#scoreText').textContent = `Resultat: ${quizResults.correct}/${totalQuestions}`;
    document.querySelector('#correctText').textContent = `Rätt svar: ${quizResults.correct}`;
    document.querySelector('#incorrectText').textContent = `Fel svar: ${quizResults.incorrect}`;
});

playAgainBtn.addEventListener('click', () => {
    // Do nothing with localStorage, just redirect to quiz page
    window.location.href = 'quiz.html';
});

exitBtn.addEventListener('click', () => {
    localStorage.removeItem('userName'); // tar bort användarens namn från local storage

    window.location.reload(); // refresha sidan för att rensa local storage

    window.location.href = 'index.html'; // skicka användaren till index.html
});
