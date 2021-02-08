//variable declariation

let year = document.getElementById('year');
let day = document.getElementById('day');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let milliSeconds = document.getElementById('milliSeconds');
let currentYear = new Date().getFullYear();
let nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerHTML = nextYear.getFullYear();

function countdownTimer(){
    let currentTime = new Date();
    let diff = nextYear - currentTime;
    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff / 1000 / 60 / 60) % 24;
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;
    let ms = Math.floor(diff % 1000);
    day.innerHTML = d < 10 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    milliSeconds.innerHTML = ms < 100 ? '0' + ms : ms;
}
setInterval(countdownTimer,1);















