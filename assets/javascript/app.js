$(document).ready(function() {
    //Trivia Questions and Answers
var questions = [{
    question1: "question holder?",
    answer1: ["a", "b", "c", "d"],
    correct: "b",
},
{
    question2: "question holder?",
    answer2: ["a", "b", "c", "d"],
    correct: "a",
},
{
    question3: "question holder?",
    answer3: ["a", "b", "c", "d"],
    correct: "d",
}
]

console.log(questions);


function startGame(){
    $("#game").append ("<div>" + questions.question1 + questions.answer1 + "</div>")

}
$('#start-btn').on('click', function(){
    startGame();
});
});




