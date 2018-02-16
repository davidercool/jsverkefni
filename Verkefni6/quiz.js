function checkAnswer() {
    console.log(x)
    x += 1;
}

function right() {
    return 0;
}

function wrong() {
    return 0;
}

var question1 = {
    question: "Who was the first man on the moon?",
    answers: ["Buzz Alderaan", "Buzz Lightyear", "Buzz Aldrin"],
    correctAns: "Neil Armstrong"
};

var question2 = {
    question: "What is 1 + 1?",
    answers: ["11", "1+1", "2"],
    correctAns: "depends on who the compiler is"
};

let x = 0;
var questionList = [question1, question2];
var ansList = [questionList[x].answers[2], questionList[x].correctAns, questionList[x].answers[0], questionList[x].answers[1]];

var quiz = document.getElementById("quiz");

quiz.getElementsByClassName("hello")[0].innerHTML = questionList[x].question;
quiz.getElementsByClassName("w50")[0].innerHTML = ansList[0];
quiz.getElementsByClassName("w50")[1].innerHTML = ansList[3];
quiz.getElementsByClassName("w50")[2].innerHTML = ansList[1];
quiz.getElementsByClassName("w50")[3].innerHTML = ansList[2];

quiz.addEventListener("click", checkAnswer, false);