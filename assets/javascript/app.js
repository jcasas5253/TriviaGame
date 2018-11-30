$(document).ready(function() {

//Hides the answers before start button is clicked
document.getElementById("answers1").style.visibility = "hidden";
document.getElementById("answers2").style.visibility = "hidden";
document.getElementById("answers3").style.visibility = "hidden";
document.getElementById("answers4").style.visibility = "hidden";
document.getElementById("answers5").style.visibility = "hidden";
document.getElementById("question1").style.visibility = "hidden";
document.getElementById("question2").style.visibility = "hidden";
document.getElementById("question3").style.visibility = "hidden";
document.getElementById("question4").style.visibility = "hidden";
document.getElementById("question5").style.visibility = "hidden";

//Start Button appends the Game/Starts game
function startGame(){
document.getElementById("answers1").style.visibility = "visible";
document.getElementById("answers2").style.visibility = "visible";
document.getElementById("answers3").style.visibility = "visible";
document.getElementById("answers4").style.visibility = "visible";
document.getElementById("answers5").style.visibility = "visible";
document.getElementById("question1").style.visibility = "visible";
document.getElementById("question2").style.visibility = "visible";
document.getElementById("question3").style.visibility = "visible";
document.getElementById("question4").style.visibility = "visible";
document.getElementById("question5").style.visibility = "visible";
}

$('#start-btn').on('click', function(){
    startGame();
    $('#start-btn').hide();
});
});




