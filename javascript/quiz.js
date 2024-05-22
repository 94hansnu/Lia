document.addEventListener('DOMContentLoaded', () => {
    let currentImageIndex = 0;
    const images = [
        { src: 'Är AI/12-0063809-652755d727f41 (1).png', isAI: true, text: 'AI-genererade bilder får ofta fel på text. Kika på tröjans logga till höger!' },
        { src: 'Är AI/100k-ai-faces-3 (1).jpg', isAI: true, text: 'Även om bilden ser realistisk ut på många sätt, finns det detaljerna som avslöjar. Tänderna har exempelvis blivit ganska fel.' },
        { src: 'Är AI/ebd926b6-d956-4a9d-907e-8dc4694caab6 (1).png', isAI: true, text: 'Ovanåkers kommun har startat ett Instagramkonto med AI-genererade bilder för att locka fler till äldrevåden. Målet är attl få fram känslan för det de gör med ansikten och inte bara miljöbilder.' },
        { src: 'Är AI/image (2).png', isAI: true, text: 'AI-genererade bilder får ofta detaljerna fel! Titta noga på smycken, fingrar och tatueringar.' },
        { src: 'Är AI/image (5).png', isAI: true, text: 'The Digitals är en serie AI-generade modeller. På bild syns J-yung.' },
        { src: 'Är AI/image (9).png', isAI: true, text: 'Influencern Aitana Lopez skapades av en spansk reklambyrån, som var trötta på att samarbeta med riktiga influencers.' },
        { src: 'Är AI/image.png', isAI: true, text: 'Detta är Emily Pellegrini, som ska spela en 23-årig virtuell influencer. Ibland kan det vara svårt att se vad som är AI när vi är så vana vid retuscherade bilder och filter!' },
        { src: 'Är AI/png (1).png', isAI: true, text: 'Fundera på armen till vänster! Tillhör den personen i mitten av bilden, eller personen i bakgrunden? Här har AI-modellen blivit förvirrad!' },
        { src: 'Är AI/png (2).png', isAI: true, text: 'Räkna mängden tänder! Dessa AI-genererade personer har ett omänskligt antal tänder.' },
        { src: 'Är AI/png (3).png', isAI: true, text: 'Ögonen på dessa AI-genererade personerna ser omänskliga ut. En annan ledtråd är örhänget på personen till höger som blivit en orealistisk klump.' },
        { src: 'Är AI/TELEMMGLPICT000334137078_trans_NvBQzQNjv4BqLZ1bJd-I99VgiaPxe-UMcE0LoKc4qSRYG1k6EyxQm_I.jpg', isAI: true, text: 'Organisationen Amnesty publicerade AI-genererade bilder tillsammans med kritik riktad mot den colombianska polisens våldsamma agerande mot demonstranter i landet. Tycker du att det är okej att använda AI-bilder på detta sätt?' },
        { src: 'Är ej AI/16 (1).jpg', isAI: false, text: '' },
        { src: 'Är ej AI/ai-genererade-nakenbilder-av-influencern-spreds-pa-natet-nu-kraver-hon-nya-lagar-instagram__mmcompress-large__ (1).png', isAI: false, text: 'Linnea Løtvedt är en norsk influencer. Hon är en av många som kräver nya lagar kring AI-bilder, efter att ha blivit utsatt för falska bilder av henne själv.' },
        { src: 'Är ej AI/image (1).png', isAI: false, text: 'Stockphoto' },
        { src: 'Är ej AI/image (3).png', isAI: false, text: 'Han Eu-Ddeum, Koreansk modell' },
        { src: 'Är ej AI/image (7).png', isAI: false, text: 'Cameron-James Wilson har skapat The Diigitals och AI-modellen Shudu' },
        { src: 'Är ej AI/image (8).png', isAI: false, text: 'Detta är Reportrar utan gränsers svenska ordförande Erik Larsson. Organisationen jobbar med pressfrihet och journalistik, och har tagit fram en rapport om AI-verktyg inom journalism.' },
        { src: 'Är ej AI/png.png', isAI: false, text: 'Stockphoto' },
        { src: 'image (6).png', isBothAIAndNotAI: true, text: 'Denna bild är en luring! Till höger syns den verkliga modellen Alexsandrah Gondora. Till vänster hittar du världens första artificiella supermodell Shudu, som skapades 2017.' },

    ];

    // Blanda bilderna
    images.sort(() => Math.random() - 0.5);

    let correctAnswers = 0;
    let totalAnswers = 0;

    function loadImage() {
        if (currentImageIndex < images.length) {
            document.getElementById('quizImage').src = images[currentImageIndex].src;
            document.getElementById('infoText').innerText = '';
            document.getElementById('nextImage').style.display = 'none';
        } else {
            const quizResults = { correct: correctAnswers, incorrect: totalAnswers - correctAnswers };
            localStorage.setItem('quizResults', JSON.stringify(quizResults));
            window.location.href = 'result.html';
        }
    }

    document.querySelectorAll('.answerBtn').forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.getAttribute('data-answer');
            const currentImage = images[currentImageIndex];
            
            // Kontrollera om den aktuella bilden har isBothAIAndNotAI-inställningen och om svaret är "ja" eller "nej"
            const isBothAIAndNotAI = currentImage.isBothAIAndNotAI && (answer === 'yes' || answer === 'no');
            
            // Hantera svar baserat på om bilden är isBothAIAndNotAI eller inte
            const isCorrect = isBothAIAndNotAI || (answer === 'yes' && currentImage.isAI) || (answer === 'no' && !currentImage.isAI);
            
            document.getElementById('infoText').innerText = isCorrect ? 'Rätt svar!' : 'Fel svar.';
            document.getElementById('infoText').innerText += ' ' + currentImage.text;
            if (isCorrect) correctAnswers++;
            totalAnswers++;
            document.getElementById('nextImage').style.display = 'block';
        });
    });

    document.getElementById('nextImage').addEventListener('click', function () {
        currentImageIndex++;
        loadImage();
    });

    loadImage();
});