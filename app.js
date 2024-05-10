const secondsHand = document.getElementById("seconds-hand")
const minutesHand = document.getElementById("minutes-hand")
const hoursHand = document.getElementById("hours-hand")

function getTime() {
   const now = new Date() // we get info about today's day, year, seconds, hours, months etc.
    const seconds = now.getSeconds() // get the seconds
    const minutes = now.getMinutes() // get the minutes
    const hours = now.getHours() // get the hours
    const timeInterval = 6

    secondsHand.style.transform = "rotate(" + (seconds*timeInterval) + "deg)"
    minutesHand.style.transform = "rotate(" + (minutes*timeInterval + seconds/10) + "deg)"
    hoursHand.style.transform = "rotate(" + (hours * 30 + minutes/2) + "deg)"
}

getTime()
setInterval(getTime, 100) // (the function is done once every 0.1s)