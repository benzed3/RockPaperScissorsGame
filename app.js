//button clicks//
$(document).ready(function () {

    var winCount = 0;
    var loseCount = 0;

    $(".pick").on("click", function () {

        var choice = $(this).val();
        var compChoice = Math.floor(Math.random() * 3) + 1;

        console.log(choice);
        console.log(compChoice);

        if (parseInt(compChoice) === 1 && parseInt(choice) === 1) {
            $("#resultText").html("<h3>Tied!!</h3>");
            $("#img1").css("opacity", 1);
            $("#img2").css("opacity", 0);
            $("#img3").css("opacity", 0);

        }
        else if (parseInt(choice) === 1 && parseInt(compChoice) === 2) {
            $("#resultText").html("<h3 style='color:red;'>Nope!! It was paper!</h3>");
            $("#img1").css("opacity", 0);
            $("#img2").css("opacity", 1);
            $("#img3").css("opacity", 0);
            loseCount++;
            $("#lose").html(loseCount);
        }
        else if (parseInt(choice) === 1 && parseInt(compChoice) === 3) {
            $("#resultText").html("<h3 style='color:green;'>You Win!!</h3>");
            $("#img1").css("opacity", 1);
            $("#img2").css("opacity", 0);
            $("#img3").css("opacity", 0);
            winCount++;
            $("#win").html(winCount);
        }
        else if (parseInt(choice) === 2 && parseInt(compChoice) === 1) {
            $("#resultText").html("<h3 style='color:green;'>You Win!!</h3>");
            $("#img1").css("opacity", 0);
            $("#img2").css("opacity", 1);
            $("#img3").css("opacity", 0);
            winCount++;
            $("#win").html(winCount);
        }
        else if (parseInt(compChoice) === 2 && parseInt(choice) === 2) {
            $("#resultText").html("<h3>Tied!!</h3>");
            $("#img1").css("opacity", 0);
            $("#img2").css("opacity", 1);
            $("#img3").css("opacity", 0);

        }
        else if (parseInt(choice) === 2 && parseInt(compChoice) === 3) {
            $("#resultText").html("<h3 style='color:red;'>Nope!! It was scissors!</h3>");
            $("#img1").css("opacity", 0);
            $("#img2").css("opacity", 0);
            $("#img3").css("opacity", 1);
            loseCount++;
            $("#lose").html(loseCount);
        }
        else if (parseInt(choice) === 3 && parseInt(compChoice) === 1) {
            $("#resultText").html("<h3 style='color:red;'>Nope!! It was rock!</h3>");
            $("#img1").css("opacity", 1);
            $("#img2").css("opacity", 0);
            $("#img3").css("opacity", 0);
            loseCount++;
            $("#lose").html(loseCount);
        }
        else if (parseInt(choice) === 3 && parseInt(compChoice) === 2) {
            $("#resultText").html("<h3 style='color:green;'>You Win!!</h3>");
            $("#img1").css("opacity", 0);
            $("#img2").css("opacity", 0);
            $("#img3").css("opacity", 1);
            winCount++;
            $("#win").html(winCount);
        }
        else if (parseInt(compChoice) === 3 && parseInt(choice) === 3) {
            $("#resultText").html("<h3>Tied!!</h3>");
            $("#img1").css("opacity", 0);
            $("#img2").css("opacity", 0);
            $("#img3").css("opacity", 1);

        }

    });
});