function stopSubmit() {
    $('form').on('submit', function(event) {
        alert('hello world');
        event.preventDefault();
    })
}