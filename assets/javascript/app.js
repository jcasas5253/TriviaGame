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
    document.getElementById("refresh-btn").style.visibility = "hidden";

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

    //Start button brings up game and starts the timer
    $('#start-btn').on('click', function () {
        startGame();
        $('#start-btn').hide();
        
     //Submit Button
    $('#submit-btn').on('click', function () {
        score();
        document.getElementById("refresh-btn").style.visibility = "visible";
    
    //Refresh Button
    $('#refresh-btn').on('click', function () {
        location.reload();
    });
    });

        //timer
        ProgressCountdown(20, 'pageBeginCountdown', 'pageBeginCountdownText').then(value => alert(`You Ran Out Of Time!`));

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
        
        
        function score() {
            if($('#correct1').is(':checked')) { correctAnsw++; }
            console.log("correct: " + correctAnsw);
            
            if($('#correct2').is(':checked')) { correctAnsw++; }
            console.log("correct: " + correctAnsw);
            
            if($('#correct3').is(':checked')) { correctAnsw++; }
            console.log("correct: " + correctAnsw);
            
            if($('#correct4').is(':checked')) { correctAnsw++; }
            console.log("correct: " + correctAnsw);
            
            if($('#correct5').is(':checked')) { correctAnsw++; }
            console.log("correct: " + correctAnsw);
            
            if ($('#myRadio1').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio2').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio3').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio4').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio5').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio6').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio7').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio8').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio9').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio10').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio11').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio12').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio13').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio14').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
            
            if ($('#myRadio1').is(':checked')) { incorrect++; }
            console.log("incorrect: " + incorrect);
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
            $("#right").append("Answers Correct: " + correctAnsw);
            $("#wrong").append("Answers Incorrect: " + incorrect);
        }
    });
    //$('#correct').click(function() {
    //if($('#correct').is(':checked')) { correctAnsw++; }
    //console.log(correctAnsw);


        

    
});





