const hour = document.getElementById("hour")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

let clock = setInterval(function time() {
    
    let dateToday = new Date();
    
    let hr = dateToday.getHours();
    let mins = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) {
        hr = "0" + hr
    }
    if (mins < 10) {
        mins = "0" + mins
    }
    if (sec < 10) {
        sec = "0" + sec
    }

    hour.textContent = hr
    minutes.textContent = mins
    seconds.textContent = sec
}, 1000);