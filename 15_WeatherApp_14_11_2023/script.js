const API_KEY = '99f0021b27b7d5ffc3168d7e73d8b933';

const input = document.getElementById('locationInput');
const button = document.getElementById('gegWeatherButton');
const info = document.getElementById('weatherContainer');



// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

button.onclick = () => {
    const cityName = input.value.trim();

    if(cityName){
        fetch(` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
     .then(response => response.json())
     .then(weather => displayWeather(weather));

    }
    input.value ='';
}

function displayWeather(datas){
    const  {name, main: { temp }, weather: [{description}], wind: { speed } } = datas;

    info.innerHTML = `
    <h2>${name}</h2>
    <p>Temperature: ${temp} °C</p>
    <p>Description: ${description}</p>
    <p>Wind speed: ${speed} m/sec</p>

    `
}



