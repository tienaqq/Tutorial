const APP_ID = "1dea9c2e30bbb932691297e9b5252b64";

const defaultValue = "--";

const searchInput = document.querySelector("#search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

searchInput.addEventListener(`change`, (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&&units=metric&&lang=vi`
  ).then(async (res) => {
    const data = await res.json();
    cityName.innerHTML = data.name || defaultValue;
    weatherState.innerHTML = data.weather[0].description || defaultValue;
    weatherIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    temperature.innerHTML = Math.round(data.main.temp) || defaultValue;

    sunrise.innerHTML =
      moment.unix(data.sys.sunrise).format("H:mm") || defaultValue;
    sunset.innerHTML =
      moment.unix(data.sys.sunset).format("H:mm") || defaultValue;
    humidity.innerHTML = data.main.humidity || defaultValue;
    windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || defaultValue;
  });
});
