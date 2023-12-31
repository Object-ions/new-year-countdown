//Get DOM elements
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

//Get current year using Date() consturactor
const currentYear = new Date().getFullYear();
//dinamycly change the year
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

//Set background year
year.innerText = currentYear + 1;

//Update countdown time
function updateCountDown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime; //will show us seconds-to-days result

  const d = Math.floor(diff / 1000 / 60 / 60 / 24); //days
  const h = Math.floor(diff / 1000 / 60 / 60) % 24; //hours
  const m = Math.floor(diff / 1000 / 60) % 60; //minutes
  const s = Math.floor(diff / 1000) % 60; //seconds

  //Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
};

//Show spinner before countdown
setTimeout(function () {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000)

//Run every second
setInterval(updateCountDown, 1000);