let start = document.getElementById('startButton');
let reset = document.getElementById('resetButton');
let stop = document.getElementById('stopButton');
let startInt = setInterval(calcClock(), 1000);
var tenth = 0;
var tenth1 = 0;
var sec = 0;
startButton.addEventListener('click', startClock);
stopButton.addEventListener('click', stopClock);
document.getElementById("tenth").innerHTML = tenth1;
document.getElementById('sec').innerHTML = sec;
function calcClock() {

   while(tenth < 59) {
    tenth++
   }
   if(tenth == 59) {
    tenth1++
    tenth = 0;
   }
   if(tenth1 == 59) {
    sec++
    tenth1 = 0;
   }
   if(sec == 60) {
    sec = 0; 
   }
    document.getElementById("tenth").innerHTML = tenth1;
    document.getElementById('sec').innerHTML = sec;
};


function startClock() {
    startInt = setInterval(calcClock, 1000);
};

function resetClock() {
    tenth1 = 0;
    sec = 0;
    document.getElementById("tenth").innerHTML = tenth1;
    document.getElementById('sec').innerHTML = sec;
}

function stopClock() {
    clearInterval(startInt);
}
