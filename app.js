//image clicks//
$(document).ready(function () {

    var winCount = 0;
    var loseCount = 0;

    $("img").on("click", function () {

        var compChoice = Math.floor(Math.random() * 3) + 1;

        var choice = $(this).val();
        console.log(choice);
        console.log(compChoice);

        if (parseInt(choice) === parseInt(compChoice)) {
            $("#resultText").html("<h3>Tie!!</h3>");
        }

        if (parseInt(choice) === 1 & parseInt(compChoice) === 2) {
            $("#resultText").html("<h3>You Lose!!</h3>");
            loseCount++;
            $("#lose").html("<h3>" + loseCount + "</h3>");
        }

        if (parseInt(choice) === 1 & parseInt(compChoice) === 3) {
            $("#resultText").html("<h3>You Win!!</h3>");
            winCount++;
            $("#win").html("<h3>" + winCount + "</h3>");
        }

        if (parseInt(choice) === 2 & parseInt(compChoice) === 1) {
            $("#resultText").html("<h3>You Win!!</h3>");
            winCount++;
            $("#win").html("<h3>" + winCount + "</h3>");
        }

        if (parseInt(choice) === 2 & parseInt(compChoice) === 3) {
            $("#resultText").html("<h3>You Lose!!</h3>");
            $("#lose").html("<h3>" + loseCount + "</h3>");
        }

        if (parseInt(choice) === 3 & parseInt(compChoice) === 1) {
            $("#resultText").html("<h3>You Lose!!</h3>");
            $("#lose").html("<h3>" + loseCount + "</h3>");
        }

        if (parseInt(choice) === 3 & parseInt(compChoice) === 2) {
            $("#resultText").html("<h3>You Win!!</h3>");
            $("#win").html("<h3>" + winCount + "</h3>");
            winCount++;
        }


    });
});