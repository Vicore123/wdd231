import { convert_unix } from "./convert_unix.mjs";
// Current Weather
const weatherIcon = document.querySelector('#weather-icon');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

// weather forecast
const today = document.querySelector('#today');
const wednesday = document.querySelector('#wednesday');
const thursday = document.querySelector('#thursday');


export function displayResults(data, data_raw) {
   // current weather
   const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   let desc = data.weather[0].description;
   weatherIcon.setAttribute('src', iconsrc);
   weatherIcon.setAttribute('alt', desc);
   temperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
   description.textContent = `${desc}`;
   high.textContent = `high: ${Math.round(data.main.temp_max)}`;
   low.textContent = `low: ${Math.round(data.main.temp_min)}`;
   humidity.textContent = `humidity: ${data.main.humidity}%`;
   sunrise.textContent = `sunrise: ${convert_unix(data_raw.city.sunrise)}`;
   sunset.textContent = `sunset: ${convert_unix(data_raw.city.sunset)}`;

   // weather forecast
   const wednesday_item = data_raw.list.filter(item => {
      const dataObj = new Date(item.dt_txt);
      return dataObj.getDay() == 3; // 0 = Domingo, 1 = Segunda, ..., 3 = Quarta
   });
   const thursday_item = data_raw.list.filter(item => {
      const dataObj = new Date(item.dt_txt);
      return dataObj.getDay() == 4;
   })

   today.innerHTML = `Today: <strong>${Math.round(data.main.temp)}°C</strong>`
   wednesday.innerHTML = `Wednesday: <strong>${Math.round(wednesday_item[0].main.temp)}°C</strong>`
   thursday.innerHTML = `Thursday: <strong>${Math.round(thursday_item[0].main.temp)}°C</strong>`

}