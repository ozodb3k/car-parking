const carOpen = document.querySelector('section .start');
const carExit = document.querySelector('section .stop');
const result = document.querySelector('.result');
const price = document.querySelector('.result .price');
const time = document.querySelector('.result .time');

let minutes
let hours
let payPrice

// car open
carOpen.addEventListener('click', function (e) {
    minutes = new Date().getMinutes()
    hours = new Date().getHours()
    payPrice = 200
})

// car exit
carExit.addEventListener('click', function (e) {
    const stopMins = new Date().getMinutes();
    const stopHours = new Date().getHours();

    if (hours === stopHours && (stopMins - minutes) >= 2) {
        payPrice += 300
    }

    if (hours > stopHours) {
        payPrice += 400 * (stopHours - hours)
    }

    price.innerHTML = '$' + payPrice
    time.innerHTML = `${stopHours - hours} soat, ${stopMins - minutes} minut`
})
