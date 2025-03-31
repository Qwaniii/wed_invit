const ourDateSource = new Date(2024, 06, 27, 15, 00, 00)
const ourDate = ourDateSource.getTime()
const timerDays = document.querySelector("#days");
const timerHours = document.querySelector("#hours");
const timerMinutes = document.querySelector("#minutes");
const timerSeconds = document.querySelector("#seconds");

let endSec = document.querySelector("#end-word-sec")
let endMin = document.querySelector("#end-word-min")
let endHour = document.querySelector("#end-word-hour")
let endDay = document.querySelector("#end-word-day")
let myMonth = document.querySelector("#month")

let timer = setInterval(function() {
    let now = new Date().getTime()
    let distance = ourDate - now;

    let days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));

    timerDays.innerHTML = days < 10 ? "0" + days : days
    timerHours.innerHTML = hours < 10 ? "0" + hours : hours
    timerMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes
    timerSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds
    myMonth.innerHTML = `${monthDiff(new Date(ourDateSource), new Date(), true)} ${declOfNum( myMonth, ["месяц", "месяца", "месяцев" ])}`

    endSec.innerHTML = declOfNum( seconds, ["секунда", "секунды", "секунд" ])
    endMin.innerHTML = declOfNum( minutes, ["минута", "минуты", "минут" ])
    endHour.innerHTML = declOfNum( hours, ["час", "часа", "часов" ])
    endDay.innerHTML = declOfNum( days, ["день", "дня", "дней" ])

    // if(distance < 0) {
    //     timerDays.innerHTML = days < 10 ? "0" + days : days
    //     timerHours.innerHTML = hours < 10 ? "0" + hours : hours
    //     timerMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes 
    //     timerSeconds.innerHTML = seconds < 10 ? "0" + seconds :  seconds
    // }

}, 1000)

function declOfNum(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

const monthDiff = (d1, d2, roundUpFractionalMonths = false) => {
    let months = (d2.getFullYear() - d1.getFullYear()) * 12 + d2.getMonth() - d1.getMonth();
    const partialMonth = (d2.getDate() < d1.getDate());
    if (roundUpFractionalMonths && partialMonth) {
        months++;
    }
    return months;
};