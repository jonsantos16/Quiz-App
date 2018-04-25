function nextQuestion() {
        $(".next").on('click', function() {
            $(this).closest("div").remove();
            giveQuestion();
        });
    } 

function giveQuestion() {           
    $("main").html(
        `<form><input type="submit"></form>`
    );
}

function stopSubmit () {
    $("form").on('submit', function(event) {
        alert('Whaddup');
        event.preventDefault();
        $("div").remove()
    });
}
nextQuestion();
stopSubmit();

