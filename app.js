const daysEl = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');



const toSummer = '21 june 2022';

function countdown() {
    const toSummerDate = new Date(toSummer);
    const currentDate = new Date();

    const totalSeconds =  new Date( toSummerDate - currentDate ) / 1000;
    
    const days = Math.floor(totalSeconds/ 3600 / 24 ); 
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const mins = Math.floor(totalSeconds/ 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    
    daysEl.innerHTML = days;
    hoursEL.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
    
}

countdown();

setInterval(countdown,1000);

