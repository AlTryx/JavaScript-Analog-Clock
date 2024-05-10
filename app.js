const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

function getTime() {
   const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const timeInterval = 6;

    secondsHand.style.transform = "rotate(" + (seconds * timeInterval) + "deg)";
    minutesHand.style.transform = "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)";
    hoursHand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
}

getTime();
setInterval(getTime, 100);

// Position numbers on the clock face centered around the center element
const numbers = document.querySelectorAll(".number");
const centerElement = document.getElementById("center");
const centerX = centerElement.offsetLeft + centerElement.offsetWidth / 2;
const centerY = centerElement.offsetTop + centerElement.offsetHeight / 2;

numbers.forEach((number, index) => {
    const angle = (index + 1) * (30 * Math.PI / 180);
    const distanceFromCenter = centerElement.offsetWidth * 13; // Adjust this value to control the distance from the center
    const x = centerX + Math.sin(angle) * distanceFromCenter;
    const y = centerY - Math.cos(angle) * distanceFromCenter;

    number.style.left = x - number.offsetWidth / 2 + "px"; // Adjust for the width of the number element
    number.style.top = y - number.offsetHeight / 2 + "px"; // Adjust for the height of the number element
});
