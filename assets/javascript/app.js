$(document).ready(function () {

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
    function startGame() {
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

    var correctAnsw = 0;
    var incorrect = 0;
    var UserAnsw = [];
    console.log("Correct" + correctAnsw);

    //Start button brings up game and starts the timer
    $('#start-btn').on('click', function () {
        startGame();
        $('#start-btn').hide();

        //timer
        ProgressCountdown(10, 'pageBeginCountdown', 'pageBeginCountdownText').then(value => alert(`You Ran Out Of Time!`));

        function ProgressCountdown(timeleft, bar, text) {
            return new Promise((resolve, reject) => {
                var countdownTimer = setInterval(() => {
                    timeleft--;

                    document.getElementById(bar).value = timeleft;
                    document.getElementById(text).textContent = timeleft;

                    if (timeleft <= 0) {
                        clearInterval(countdownTimer);
                        resolve(true);
                    }
                }, 1000);
            });
        }
    });
    //$('#correct').click(function() {
    //if($('#correct').is(':checked')) { correctAnsw++; }
    //console.log(correctAnsw);

    $('#submit-btn').on('click', function () {
        if($('#correct1').is(':checked')) { correctAnsw++; }
        console.log(correctAnsw);
        if($('#correct2').is(':checked')) { correctAnsw++; }
        console.log(correctAnsw);
        if($('#correct3').is(':checked')) { correctAnsw++; }
        console.log(correctAnsw);
        if($('#correct4').is(':checked')) { correctAnsw++; }
        console.log(correctAnsw);
        if($('#correct5').is(':checked')) { correctAnsw++; }
        console.log(correctAnsw);
    });


        

    
});





