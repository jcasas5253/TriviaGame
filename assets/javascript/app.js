$(document).ready(function() {

    //Trivia Questions and Answers
var question1 = "Question Placeholder?"


console.log(question1);

document.getElementById("answers1").style.visibility = "hidden";

//Start Button appends the Game and Starts game
function startGame(){
    $("#question1").append ("<div>" + question1 + "</div>")
    document.getElementById("answers1").style.visibility = "visible";
    

}
$('#start-btn').on('click', function(){
    startGame();
    $('#start-btn').hide();

});
});




