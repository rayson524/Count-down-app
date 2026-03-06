document.getElementById('countdownForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputDate = document.getElementById('datePicker').value;
    if (!inputDate) {
        alert('Please select a date!');
        return;
    }
    const countDownDate = new Date(inputDate + 'T23:59:59').getTime();  // End of selected day
    if (countDownDate <= Date.now()) {
        alert('Please select a future date!');
        return;
    }

    // Set min to today for next loads
    document.getElementById('datePicker').min = new Date().toISOString().split('T')[0];

    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED!";
        }
    }, 1000);
});
