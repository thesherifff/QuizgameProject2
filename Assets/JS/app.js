/** variables for game
 */

let start = document.getElementById("start");
let quiz = document.getElementById("game");
let quizQuestion = document.getElementById("gameQuestion");
let quizImg = document.getElementById("gameImg");
let optionA = document.getElementById("valA");
let optionB = document.getElementById("valB");
let optionC = document.getElementById("valC");
let optionD = document.getElementById("valD");
let scoreBlock = document.getElementById("scoreBlock");
let scoreMessage = document.getElementById("scoreMessage");
let quizAgain = document.getElementById("newAgain");
let choices = document.getElementById("val");
let choiceResponse = document.getElementById("svar");
let score = 0;

/** Create function to collect correct function from array!
 * Questions for quiz
 */

let questions = [{
    question: "What country has the highest life expectancy?",
    valA: "Hong Kong",
    valB: "Stockholm",
    valC: "Toronto",
    valD: "Helsinki",
    correctAnswer: "A"
}, {
    question: "Where would you be if you were standing on the Spanish Steps?",
    valA: "Rome",
    valB: "Napoli",
    valC: "Bologna",
    valD: "Milano",
    correctAnswer: "A"
}, {
    question: "Which language has the most native speakers",
    valA: "Mandarin",
    valB: "English",
    valC: "Arabic",
    valD: "Spanish",
    correctAnswer: "D"
}, {
    question: "What is the most common surname in the United States?",
    valA: "Johnson",
    valB: "Trump",
    valC: "Smith",
    valD: "Henry",
    correctAnswer: "C"
}, {
    question: "What disease commonly spread on pirate ships?",
    valA: "Scurvy",
    valB: "Gonorrhea",
    valC: "Mad Cow Disease",
    valD: "Herpes",
    correctAnswer: "A"
}, {
    question: "Who was the Ancient Greek God of the Sun?",
    valA: "Apollo",
    valB: "Zeus",
    valC: "Ra",
    valD: "Odin",
    correctAnswer: "A"
}, {
    question: "What year was the United Nations established?",
    valA: "1947",
    valB: "1945",
    valC: "1946",
    valD: "1944",
    correctAnswer: "B"
}, {
    question: "How many minutes are in a full week?",
    valA: "10,080",
    valB: "500,25600",
    valC: "30,000",
    valD: "8,064",
    correctAnswer: "A"
}, {
    question: "What is the max length of a TikTok video?",
    valA: "50 seconds",
    valB: "30 seconds",
    valC: "45 seconds",
    valD: "60 seconds",
    correctAnswer: "D"
}, {
    question: "How many hearts does an octopus have?",
    valA: "4",
    valB: "7",
    valC: "2",
    valD: "3",
    correctAnswer: "D"
}, ];


let questionIndex = 0;


function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    optionA.innerHTML = q.valA;
    optionB.innerHTML = q.valB;
    optionC.innerHTML = q.valC;
    optionD.innerHTML = q.valD;
    choices.style.display = "block";
}



function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

/**
 * Scores
 */

function showScore() {
    game.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Yeah..Perhaps you should pick up a book?</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Not bad, but you can do better!</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Einstein called, he wants his books back!</p>"
    }
    scoreMessage.style.display = "block";
    newGame.style.display = "block";
}




function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    newGame.style.display = "none";
    score = 0;
    questionIndex = 0;
}