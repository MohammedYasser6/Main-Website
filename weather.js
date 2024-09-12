// https://api.openweathermap.org/data/2.5/weather?q=cairo&units=metric&APPID=28fd15358cdecbc1a1dfef367e71acef

let weather = document.getElementById("weatherr");
let city = document.querySelector(".weather-body .city");
let temp = document.querySelector(".weather-body #temp");
let img = document.querySelector(".weather-body .img");
let smallBox = document.querySelector(".weather-body .small-box");
let minmax =document.getElementById("minmax")

let cityy = ""
const input = document.querySelector(".weather-body .input");
const searchBtn = document.querySelector(".search-btn");
displayWeather("cairo");
searchBtn.addEventListener("click", () => {
    // Construct API URL with cityy variable
    displayWeather(cityy)
  })
   function displayWeather(cityy){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityy}&units=metric&APPID=28fd15358cdecbc1a1dfef367e71acef`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        // Update UI with received data
        weather.innerText = `Weather: ${data.weather[0].main}`;
        city.innerText = data.name;
        temp.innerText = `Temp: ${data.main.temp}°`;
        minmax.innerHTML=`Temp Range: ${data.main.temp_min}°/${data.main.temp_max}°`;
        img.style.backgroundImage = `url(http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`;

      })
   }
 input.addEventListener("input" , (e)=>{
    const value = e.target.value;
    cityy = value

 })