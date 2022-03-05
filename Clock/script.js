

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const secondHandUTC = document.querySelector('.second-hand--utc')
const minuteHandUTC = document.querySelector('.min-hand--utc')
const hourHandUTC = document.querySelector('.hour-hand--utc')

const secondHandSelect = document.querySelector('.second-hand--select')
const minuteHandSelect = document.querySelector('.min-hand--select')
const hourHandSelect = document.querySelector('.hour-hand--select')

const btnTokyo = document.getElementById('btn--tokyo')
const btnParis = document.getElementById('btn--france')
const btnCuenca = document.getElementById('btn--ecuador')


const clockSelect = document.querySelector('.select-clock')
const numberSelect = document.querySelector('.number--select')

function setDate() {
    const now = new Date();
    

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsUTC = now.getUTCSeconds();
    const minutesUTC = now.getUTCMinutes();
    const hoursUTC = now.getUTCHours();


    const secondsDegrees = ((seconds/60) * 360) + 90;
    const minutesDegrees = ((minutes/60) * 360) + 90;
    const hoursDegrees = ((hours/12) * 360) + 90;

    const secondsDegreesUTC = ((secondsUTC/60) * 360) + 90;
    const minutesDegreesUTC = ((minutesUTC/60) * 360) + 90;
    const hoursDegreesUTC = ((hoursUTC/12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

    secondHandUTC.style.transform = `rotate(${secondsDegreesUTC}deg)`
    minuteHandUTC.style.transform = `rotate(${minutesDegreesUTC}deg)`
    hourHandUTC.style.transform = `rotate(${hoursDegreesUTC}deg)`


    if (secondsDegrees === 90) {
        secondHand.style.transition = "none" 
    } else {
        secondHand.style.transition = ""
    }

    if (secondsDegreesUTC === 90) {
        secondHandUTC.style.transition = "none" 
    } else {
        secondHandUTC.style.transition = ""
    }
    
   
    

    function changeTimeZone(date, ianatz) {
        let invdate = new Date(date.toLocaleString('en-US', {timeZone: ianatz}));
        let diff = date.getTime() - invdate.getTime();
        return new Date(date.getTime() - diff)
    }

    function checkTime(i) {
        if (i < 10) {i = "0" + i}; 
        return i;
    }
    
    
    btnTokyo.addEventListener("click", function(e) {
        let timeZoneInput = "Asia/Tokyo"
        timeZone = `${timeZoneInput}`
        clockSelect.style.backgroundImage = "url(https://media.giphy.com/media/tKkJrjL0ghnX2lpIsM/giphy.gif)"
        numberSelect.style.color = "#140c12"
        secondHandSelect.style.background = "#74250e"
        hourHandSelect.style.background = "#a55248"
        minuteHandSelect.style.background = "#d58d78"
    })

    
    btnParis.addEventListener("click", function(e) {
        let timeZoneInput = "Europe/Paris"
        timeZone = `${timeZoneInput}`
        clockSelect.style.backgroundImage = "url(https://media.giphy.com/media/UbToNUhGJH2Lu/giphy.gif)"
        numberSelect.style.color = "#424b35"
        secondHandSelect.style.background = "#171e13"
        hourHandSelect.style.background = "#561d18"
        minuteHandSelect.style.background = "#b47c4b"

    })

   
    btnCuenca.addEventListener("click", function(e) {
        let timeZoneInput = "Etc/GMT+5"
        timeZone = `${timeZoneInput}`
        clockSelect.style.backgroundImage = "url(https://media.giphy.com/media/fUMhF7Vp5iLVm/giphy-downsized-large.gif)"
        numberSelect.style.color = "#a83b24"
        secondHandSelect.style.background = "#042127"
        hourHandSelect.style.background = "#f7e028"
        minuteHandSelect.style.background = "#a15301"
    })
    
   
    const selectedBtn = changeTimeZone(now, `${timeZone}`);
    
    let secondsSelected = selectedBtn.getSeconds();
    let minutesSelected = selectedBtn.getMinutes();
    let hoursSelected = selectedBtn.getHours();
    secondsSelected = checkTime(secondsSelected)
    minutesSelected = checkTime(minutesSelected)

    
    const secondsDegreesSelected = ((secondsSelected/60) * 360) + 90;
    const minutesDegreesSelected = ((minutesSelected/60) * 360) + 90;
    const hoursDegreesSelected = ((hoursSelected/12) * 360) + 90;

    secondHandSelect.style.transform = `rotate(${secondsDegreesSelected}deg)`
    minuteHandSelect.style.transform = `rotate(${minutesDegreesSelected}deg)`
    hourHandSelect.style.transform = `rotate(${hoursDegreesSelected}deg)`

    if (secondsDegreesSelected === 90) {
        secondHandSelect.style.transition = "none"
    } else {
        secondHandSelect.style.transition = ""
    }

    // Code for Digital Clock
    // document.getElementById('japan-id').innerHTML = hoursSelected + ":" + minutesSelected + ":" + secondsSelected; 
    
}

setInterval(setDate, 1000)
setDate();

