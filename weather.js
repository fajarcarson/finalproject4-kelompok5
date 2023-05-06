const ybtn = document.getElementById("xbtn");
const wicon = document.querySelector(".weather-icon");

ybtn.addEventListener("click", function () {
	search()
});

function search() {
    const input = document.getElementById("search").value
    const apiKey = '4af6ebc02091900d1a0eeb7808df470e';
    const city = input;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("city").innerHTML = data.name;
            document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + ' °C';
            document.getElementById("windspeed").innerHTML = data.wind.speed + ' km/h';
            document.getElementById("humidity").innerHTML = data.main.humidity + ' %'
            document.getElementById("conditions").innerHTML = data.weather[0].main;
            document.getElementById("country").innerHTML = data.sys.country;
            
            if(data.weather[0].main == "Clouds"){
                wicon.src = "assets/img/weather/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                wicon.src = "assets/img/weather/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                wicon.src = "assets/img/weather/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                wicon.src = "assets/img/weather/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                wicon.src = "assets/img/weather/mist.png";
            }
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
}