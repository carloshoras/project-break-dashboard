const apiKey = "218bd3258cad459c84e152658231412"
const city = "Barcelona"
const cityAndMeteo = document.querySelector(".cityAndMeteo")
const completeInfo = document.querySelector(".completeInfo")
const forecastDay = document.querySelector(".forecastDay")


fetchMeteo()
function paintMeteo (meteoJson) {
    cityAndMeteo.innerHTML = `
    <p>${meteoJson.location.name} / ${meteoJson.location.country}</p>
    <span>${meteoJson.current.condition.text}</span>`
    completeInfo.innerHTML = `
    <img src="${meteoJson.current.condition.icon}" alt="icon weather"/>
    <span>${meteoJson.current.temp_c}</span>
    <span>°C</span>
    <div>
        <p>Lluvia: ${meteoJson.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
        <p>Humedad: ${meteoJson.current.humidity}%</p>
        <p>Viento: ${meteoJson.current.wind_kph}km/h</p>
    </div>
    `
    for (let i=0;i<24;i++) {
        forecastDay.innerHTML += `
        <div>
            <span>${meteoJson.forecast.forecastday[0].hour[i].time.split(" ")[1]}</span>
            <img src="${meteoJson.forecast.forecastday[0].hour[i].condition.icon}" alt="icon weather" />
            <span>${meteoJson.forecast.forecastday[0].hour[i].temp_c} °C</span>
        </div>`
    }
}

async function fetchMeteo () {
    const meteo = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`)
    const meteoJson = await meteo.json()
    paintMeteo(meteoJson)
}