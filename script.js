// const cloud_pct = document.getElementById("cloud_pct")
// const feels_like = document.getElementById("feels_like")
// const humidity = document.getElementById("humidity")
// const max_temp = document.getElementById("max_temp")
// const min_temp = document.getElementById("min_temp")
// const sunrise = document.getElementById("sunrise")
// const sunset = document.getElementById("sunset")
// const temp = document.getElementById("temp")
// const wind_degrees = document.getElementById("wind_degrees")
// const wind_speed = document.getElementById("wind_speed")
const maintemp = document.getElementById("main-temp")
const mainhumidity = document.getElementById("main-humidity")
const mainwind = document.getElementById("main-wind")

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e0e4d4ced6msh5412058daf245a1p1ca6f7jsnd53dafffe11c',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    cityName.innerHTML = city

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}` , options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        maintemp.innerHTML = response.temp
        mainhumidity.innerHTML = response.humidity
        mainwind.innerHTML = response.wind_speed
        // cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")