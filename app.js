//button clicks//
$(document).ready(function () {

    var winCount = 0;
    var loseCount = 0;

    $(".pick").on("click", function () {

        var choice = $(this).val();
        var compChoice = Math.floor(Math.random() * 3) + 1;

        console.log(choice);
        console.log(compChoice);

        if (parseInt(compChoice) === parseInt(choice)) {
            $("#resultText").html("<h3>Tied!!</h3>");
        }
        else if (parseInt(choice) === 1 && parseInt(compChoice) === 2) {
            $("#resultText").html("<h3 style='color:red;'>You Lose!!</h3>");
            $("#img1").css("opacity", 0);
            $("#img2").css("opacity", 1);
            $("#img3").css("opacity", 0);
            loseCount++;
            $("#lose").html(loseCount);
        }
        else if (parseInt(choice) === 1 && parseInt(compChoice) === 3) {
            $("#resultText").html("<h3 style='color:green;'>You Win!!</h3>");
            $("#img1").css("opacity", 0);
            $("#img2").css("opacity", 0);
            $("#img3").css("opacity", 1);
            winCount++;
            $("#win").html(winCount);
        }
        else if (parseInt(choice) === 2 && parseInt(compChoice) === 1) {
            $("#resultText").html("<h3 style='color:green;'>You Win!!</h3>");
            $("#img1").css("opacity", 1);
            $("#img2").css("opacity", 0);
            $("#img3").css("opacity", 0);
            winCount++;
            $("#win").html(winCount);
        }
        else if (parseInt(choice) === 2 && parseInt(compChoice) === 3) {
            $("#resultText").html("<h3 style='color:red;'>You Lose!!</h3>");
            $("#img1").css("opacity", 0);
            $("#img2").css("opacity", 0);
            $("#img3").css("opacity", 1);
            loseCount++;
            $("#lose").html(loseCount);
        }
        else if (parseInt(choice) === 3 && parseInt(compChoice) === 1) {
            $("#resultText").html("<h3 style='color:red;'>You Lose!!</h3>");
            $("#img1").css("opacity", 1);
            $("#img2").css("opacity", 0);
            $("#img3").css("opacity", 0);
            loseCount++;
            $("#lose").html(loseCount);
        }
        else if (parseInt(choice) === 3 && parseInt(compChoice) === 2) {
            $("#resultText").html("<h3 style='color:green;'>You Win!!</h3>");
            $("#img1").css("opacity", 0);
            $("#img2").css("opacity", 1);
            $("#img3").css("opacity", 0);
            winCount++;
            $("#win").html(winCount);
        }

    });
});