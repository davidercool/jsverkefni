var question1 = {
    question: "Who was the first man on the moon?",
    answers: ["Buzz Alderaan","Buzz Lightyear","Buzz Aldrin"],
    correctAns: "Neil Armstrong"
};


var quiz = document.getElementsByClassName("hello");
quizans  = quiz.getElementsByClassName("answers")[0];
quizans1 = quiz.getElementsByClassName("answers")[1];
quizans2 = quiz.getElementsByClassName("answers2")[0];
quizans3 = quiz.getElementsByClassName("answers2")[1];

quiz.innerHTML = question1.question;

quizans.innerHTML = question1.answers[1];
quizans1.innerHTML = question1.correctAns;
quizans2.innerHTML = question1.answers[0];
quizans3.innerHTML = question1.answers[2];
