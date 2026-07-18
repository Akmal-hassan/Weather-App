 let input = document.querySelector(".city-name");
    let weatherTemp = document.querySelector(".weather-temp");
    let weatherFeel_like = document.querySelector(".weather-feel_like");
    let weatherHuminidity = document.querySelector(".weather-huminidity");
    let weatherDescription = document.querySelector(".weather-description");
    let weatherSpeed = document.querySelector(".weather-speed")
    let countryName = document.querySelector(".country-name")
    let btn = document.querySelector('.btn');

    btn.addEventListener("click" , ()=>{
        let cityName = input.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ae094446b3b4c23e10b6ba4eda8b3ab2&units=metric`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            weatherTemp.textContent = `Temperature: ${data.main.temp}°C`;
            weatherFeel_like.textContent = `Feels Like: ${data.main.feels_like}°C`;
            weatherHuminidity.textContent = `Humidity: ${data.main.humidity}%`;
            weatherDescription.textContent = `Description: ${data.weather[0].description}`;
            weatherSpeed.textContent = `Speed : ${data.wind.speed} Km/h`;
            countryName.textContent = `Country : ${data.sys.country}`;

        })
    })