var question1 = {
    question: "Who was the first man on the moon?",
    answers: ["Buzz Alderaan", "Buzz Lightyear", "Buzz Aldrin"],
    correctAns: "Neil Armstrong"
};


var quiz = document.getElementById("quiz");

quiz.getElementsByClassName("hello")[0].innerHTML = question1.question;
quiz.getElementsByClassName("w50")[0].innerHTML = question1.answers[2];
quiz.getElementsByClassName("w50")[1].innerHTML = question1.answers[0];
quiz.getElementsByClassName("w50")[2].innerHTML = question1.answers[1];
quiz.getElementsByClassName("w50")[3].innerHTML = question1.correctAns;