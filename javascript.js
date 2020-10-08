
const racetrack_input = document.querySelector('.Track-Selector')

const car_input = document.querySelector('.Car-Selector')

const weather_input = document.querySelector('.Weather-Conditions')

const Time_btn = document.querySelector('#Time-btn');

Time_btn.addEventListener('click', Calc_time);

function Calc_time() {
    let location = Number(racetrack_input.value);
    let car = Number(car_input.value);
    let weathering = Number(weather_input.value) / 100;
    let time = (car * location) + weathering;

    let time_total = document.querySelector('.Lap-Time-Display');
    time_total.innerText = "Your Lap Time: " + time.toFixed(2) + " seconds";
}

