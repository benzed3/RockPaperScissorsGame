//button clicks//
$(document).ready(function () {

    var winCount = 0;
    var loseCount = 0;

    $(".pick").on("click", function () {

        var choice = $(this).val();
        var compChoice = Math.floor(Math.random() * 3) + 1;

        console.log(choice);
        console.log(compChoice);

        if (compChoice === 1 && choice === 2) {
            alert("win!");
        }

    });
});