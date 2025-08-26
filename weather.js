const apiKey = "48cb4469254034076e0e4b6e79f798d1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status ==404){
        document.querySelector(".error").style.display="block";
        searchBox.style.color="red";
        searchBox.style.textDecoration="underline";
        document.querySelector(".weather").style.display="none";
    }
    else{

    var data = await response.json();
    
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity+ "%";
    document.querySelector(".wind").innerText = data.wind.speed +"km/h";
    document.querySelector(".feels").innerText = Math.round(data.main.feels_like) +  "°C" ;
    document.querySelector(".visi").innerText = data.sys.visibility;
    if(data.weather[0].main === "Clouds"){
        weatherIcon.src="photos/clouds.png";
    }
    else  if(data.weather[0].main === "Clear"){
        weatherIcon.src="photos/clear.png";
    }
    else  if(data.weather[0].main === "Dizzle"){
        weatherIcon.src="photos/dizzle.png";
    }
    else  if(data.weather[0].main === "Mist"){
        weatherIcon.src="photos/mist.png";
    }
    else  if(data.weather[0].main === "Rain"){
        weatherIcon.src="photos/rain.png";
    }
    else  if(data.weather[0].main === "Snow"){
        weatherIcon.src="photos/snow.png";
    }


    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
