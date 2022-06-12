
let currentDate=document.querySelector("#current-date");
let now=new Date();
let days=["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];
let day=days[now.getDay()]
let hours = now.getHours();
if(hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if(minutes < 10) {
  minutes = `0${minutes}`;

}
currentDate.innerHTML=`${day} ${hours}:${minutes}`;

function displayData(response) {
  let cityName = response.data.name;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = cityName; 

    let temperatureElement=document.querySelector("#valueTemp");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    let pressureElement=document.querySelector("#pressure");
    let descriptionElement=document.querySelector("#description");
    let iconElement=document.querySelector("#icon");
    let sunriseDate=new Date((response.data.sys.sunrise)*1000);
    let sunsetDate=new Date((response.data.sys.sunset)*1000);
  let sunriseHours=sunriseDate.getHours();
  if(sunriseHours < 10) {
  sunriseHours = `0${sunriseHours}`;
}
  let sunriseMinutes=sunriseDate.getMinutes();
if(sunriseMinutes < 10) {
  sunriseMinutes = `0${sunriseMinutes}`;
}
   let sunsetHours=sunsetDate.getHours();
   if(sunsetHours < 10) {
  sunsetHours = `0${sunsetHours}`;
}
  let sunsetMinutes=sunsetDate.getMinutes();
if(sunsetMinutes < 10) {
  sunsetMinutes = `0${sunsetMinutes}`;
}

let sunriseElement=document.querySelector("#sunrise");
let sunsetElement=document.querySelector("#sunset");
sunriseElement.innerHTML=`${sunriseHours}:${sunriseMinutes}`;
sunsetElement.innerHTML=`${sunsetHours}:${sunsetMinutes}`;

celsiusTemperature=response.data.main.temp;

temperatureElement.innerHTML=Math.round(response.data.main.temp);
humidityElement.innerHTML=response.data.main.humidity;
pressureElement.innerHTML=response.data.main.pressure;
console.log(response.data);
windElement.innerHTML=Math.round(response.data.wind.speed);
descriptionElement.innerHTML=response.data.weather[0].description;
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].main);
};

function searchEngine(city) {
 let apiKey = `8740228fba90a854cea90d4f0155d9e9`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayData);
} 


function displayFahrenheit(event){
    event.preventDefault();
    let fahreinheitElement=document.querySelector("#valueTemp");
    celsiusLink.classList.remove("active");
    fahreinheitLink.classList.add("active");
    let fahreinheitTemperature=Math.round(celsiusTemperature*9)/5+32;
    fahreinheitElement.innerHTML=Math.round(fahreinheitTemperature);
}

function displayCelsius(event){
    event.preventDefault();
        let temperatureElement=document.querySelector("#valueTemp");
    celsiusLink.classList.add("active");
    fahreinheitLink.classList.remove("active");
        temperatureElement.innerHTML=Math.round(celsiusTemperature);
}

let celsiusTemperature=null;

let fahreinheitLink=document.querySelector("#link-fahrenheit");
fahreinheitLink.addEventListener("click", displayFahrenheit);

let celsiusLink=document.querySelector("#link-celsius");
celsiusLink.addEventListener("click", displayCelsius);

function search(event){
    event.preventDefault();
    let city=document.querySelector("#site-search").value;
searchEngine(city);
}

let searchForm=document.querySelector("#search-form")
searchForm.addEventListener("submit", search)

function showPosition(position) {
   let apiKey = `8740228fba90a854cea90d4f0155d9e9`;
 let lat =position.coords.latitude;
  let lon =position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayData);
} 

function showCurrentLocation(){
  navigator.geolocation.getCurrentPosition(showPosition);
 } 

 let currentLocation = document.querySelector("#currentLocation");
currentLocation.addEventListener("click", showCurrentLocation);

