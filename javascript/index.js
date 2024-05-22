document.addEventListener('DOMContentLoaded', () => {
    const startQuizBtn = document.getElementById('startQuiz');
    startQuizBtn.addEventListener('click', () => {
        const userName = document.getElementById('userName').value;
        if (userName.trim() !== '') {
            localStorage.setItem('userName', userName);
            window.location.href = 'quiz.html';
        } else {
            alert('Ange ditt namn för att fortsätta.');
        }
    });
});
