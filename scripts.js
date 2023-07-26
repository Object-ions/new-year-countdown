//Get DOM elements
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

//Get current year using Date() consturactor
const currentYear = new Date().getFullYear();
//dinamycly change the year
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountDown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime; //will show us seconds-to-days result

  const d = Math.floor(diff / 1000 / 60 / 60 / 24); //days
  const h = Math.floor(diff / 1000 / 60 / 60) % 24; //hours
  const m = Math.floor(diff / 1000 / 60) % 60; //minutes
  const s = Math.floor(diff / 1000) % 60; //seconds
};

setInterval(updateCountDown, 1000); //will update the function every second