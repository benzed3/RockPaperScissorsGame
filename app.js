//image clicks//
$(document).ready(function () {

    var winCount = 0;
    var loseCount = 0;

    $(".pick").on("click", function () {

        var choice = $(this).data();
        var compChoice = Math.floor(Math.random() * 3) + 1;

        console.log(choice);
        console.log(compChoice);

        if (parseInt(choice) === parseInt(compChoice)) {
            $("#resultText").html("<h3>Tie!!</h3>");
        }

    });
});