function displayTemperature(response){
    console.log(response.data);
    let temperatureElement=document.querySelector("temp");
    let cityElement=document.querySelector("#city");
    let descriptionElement=document.querySelector("description");
    let humidityElement=document.querySelector("#humidity");
        let windElement=document.querySelector("#wind");

    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather(0).description;
humidityElement.innerHTML=respone.data.main.humidity;
windElement.innerHTML=Math.round(respone.data.main.wind.speed);
}

let apiKey= `8740228fba90a854cea90d4f0155d9e9`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);