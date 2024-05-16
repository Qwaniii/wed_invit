const ourDate = new Date(2024, 06, 27, 15, 00, 00).getTime()

const timerDays = document.querySelector("#days");
const timerHours = document.querySelector("#hours");
const timerMinutes = document.querySelector("#minutes");
const timerSeconds = document.querySelector("#seconds");

let endSec = document.querySelector("#end-word-sec")
let endMin = document.querySelector("#end-word-min")
let endHour = document.querySelector("#end-word-hour")
let endDay = document.querySelector("#end-word-day")

let timer = setInterval(function() {
    let now = new Date().getTime()
    let distance = ourDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    timerDays.innerHTML = days < 10 ? "0" + days : days
    timerHours.innerHTML = hours < 10 ? "0" + hours : hours
    timerMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes
    timerSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds

    endSec.innerHTML = declOfNum(seconds, ["секунда", "секунды", "секунд" ])
    endMin.innerHTML = declOfNum(minutes, ["минута", "минуты", "минут" ])
    endHour.innerHTML = declOfNum(hours, ["час", "часа", "часов" ])
    endDay.innerHTML = declOfNum(days, ["день", "дня", "дней" ])

    if(distance < 0) {
        clearInterval(timer);
        timerDays.innerHTML = 0
        timerHours.innerHTML = 0
        timerMinutes.innerHTML = 0
        timerSeconds.innerHTML = 0
    }

}, 1000)

function declOfNum(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

