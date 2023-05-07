window.addEventListener('load', () => {
    let lat, lon;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            getWeather(lat, lon);
        }, error => {
            console.log(error);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function getWeather(lat, lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9ef97295b513a713ce92bf0c2d6f9687&units=metric`;

    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const location = data.name;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

        document.querySelector('.temperature').innerHTML = temperature + '°C';
        document.querySelector('.location').innerHTML = location;
        document.querySelector('#weather-icon').src = iconUrl;
    })
    .catch(error => {
        console.log(error);
    });
}