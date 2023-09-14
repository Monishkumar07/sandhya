
// Set the date we're counting down to

var endDate = new Date("Sep 16, 2023 00:00:00").getTime();

// Update the count down every 1 second

var x = setInterval(function() {

    // Get todays date and time

    var now = new Date().getTime();

    // Find the distance between now an the count down date

    var distance = endDate - now;

    // Time calculations for days, hours, minutes and seconds

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in elements with id="cdHour/cdMin/cdSec"

    document.getElementById("daysNum").innerHTML = ("0" + days).slice(-2);  

    document.getElementById("hoursNum").innerHTML = ("0" + hours).slice(-2);

    document.getElementById("minsNum").innerHTML = ("0" + minutes).slice(-2);

    document.getElementById("secsNum").innerHTML = ("0" + seconds).slice(-2);

if (hours==5) {

     //clearInterval(x);

     //document.getElementById("countContainer").innerHTML = "HAPPY BIRTHDAY";

    window.location.href = "new.html";

    }
if (hours==3||hours==2||hours==1) {

     //clearInterval(x);

     //document.getElementById("countContainer").innerHTML = "HAPPY BIRTHDAY";

    window.location.href = "new1.html";

    }

}, 1000);

const balloonContainer = document.getElementById("balloon-container");

 

function random(num) {

  return Math.floor(Math.random() * num);

}

 

function getRandomStyles() {

  var r = random(255);

  var g = random(255);

  var b = random(255);

  var mt = random(200);

  var ml = random(50);

  var dur = random(5) + 5;

  return `

  background-color: rgba(${r},${g},${b},0.7);

  color: rgba(${r},${g},${b},0.7); 

  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);

  margin: ${mt}px 0 0 ${ml}px;

  animation: float ${dur}s ease-in infinite

  `;

}

 

function createBalloons(num) {

  for (var i = num; i > 0; i--) {

    var balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.cssText = getRandomStyles();

    balloonContainer.append(balloon);

  }

}

 

function removeBalloons() {

  balloonContainer.style.opacity = 0;

  setTimeout(() => {

    balloonContainer.remove()

  }, 500)

}

 

window.addEventListener("load", () => {

  createBalloons(30)

});

 

window.addEventListener("click", () => {

  removeBalloons();

});