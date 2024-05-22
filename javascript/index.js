document.addEventListener('DOMContentLoaded', () => {
    const startQuizBtn = document.getElementById('startQuiz');
    const forbiddenWords = [
        "Bög", "Fitta", "Kuk", "Fuck", "Bitch", "Shit", "Whore", "Hora",
        "Dick", "Pussy", "Nigga", "Röv", "Skit", "Helvete", "Jävla", "Knulla",
        "Pung", "Idiot", "Mongo", "Djävla", "Damp", "Cunt", "Wanker", "Neger",
        "Dachri", "Horunge", "Kuksugare", "Gahba", "Kahba", "Kahbe", "Nigger",
        "Jävel"
    ];
    startQuizBtn.addEventListener('click', () => {
        const userName = document.getElementById('userName').value;
        if (userName.trim() !== '') {
            const lowerCaseUserName = userName.toLowerCase();
            const containsForbiddenWord = forbiddenWords.some(word => lowerCaseUserName.includes(word.toLowerCase()));

            if (containsForbiddenWord) {
                alert('Användarnamnet innehåller olämpliga ord. Vänligen ange ett annat namn.');
            } else {
                localStorage.setItem('userName', userName);
                window.location.href = 'quiz.html';
            }
        } else {
            alert('Ange ditt namn för att fortsätta.');
        }
    });
});
