setInterval(
    function(){
        $("#currentDay").text(moment().format("DDD MMM, YYYY hh:mm:ss"))
    
    },1000)

    setInterval(
        function () {
            $("#currentDay").text(moment().format("DDD MMM, YYYY hh:mm:ss"))
    
        }, 1000)

let searchInp = document.querySelector('.weather_search');
let city = document.querySelector('.weather_city');
let day = document.querySelector('.weather_day');
let humidity = document.querySelector('.weather_indicator-himidity>.value');
let wind = document.querySelector('weather_indicator-wind>.value');
let pressure = document.querySelector('.weather_indicator-pressure>.value');
let temperature = document.querySelector('.weather_temperature>.value');
let image = document.querySelector('.weather_image');
let forecastBlock = document.querySelector('.weather_forecast');
let weatherAPIKey = '0e1d4f15c175dd06881d40b79606df7b';

let searchButton = document.querySelector("#search-button")
let searchInput = document.querySelector("#search-input")
let weatherForecastDiv = document.querySelector(".weather_forecast")

function getWeather() {
    let cityName = searchInput.value;

    console.log(cityName)

    let weatherBaseEndpoint = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=0e1d4f15c175dd06881d40b79606df7b'


    fetch(weatherBaseEndpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data[0].lat)
            console.log(data[0].lon)

            let forecastBaseEndpoint = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat + '&lon=' + data[0].lon + '&appid=0e1d4f15c175dd06881d40b79606df7b';

            fetch(forecastBaseEndpoint)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    // render the data into the HtML
                    let day1 = data.list[3]
                    let day2 = data.list[11]
                    let day3 = data.list[19]
                    let day4 = data.list[27]
                    let day5 = data.list[35]

                    let weekData = [
                        day1, day2, day3, day4, day5
                    ]

                    console.log(weekData);

                    // <article class="weather_forecast_item">
                    //   <img src="imageshttp://openweathermap.org/img/wn/" alt="http://openweathermap.org/img/wn/" class="weather_forecast_icon">
                    //   <h3>Day 1</h3>
                    //   <p>Temp: </p>
                    //   <p>Humidity: </p>
                    //   <p>Wind Speed: </p>
                    // </article>

                    for(i = 0; i < weekData.length; i++) {
                        let newArticle = document.createElement("article");
                        newArticle.classList.add("weather_forecast_item");

                        let newImg = document.createElement("img");
                        newImg.src = "http://openweathermap.org/img/wn/" + weekData[i].weather[0].icon +"@2x.png";
                        newImg.classList.add("weather_forecast_icon");

                        let newH3 = document.createElement("h3");
                        newH3.textContent = "Day " + (i+1)

                        let tempP = document.createElement("p");
                        tempP.textContent = "Temp: " + weekData[i].main.temp

                        let humidityP = document.createElement("P")
                        humidityP.textContent = "Humidity: " + weekData[i].main.humidity

                        let windspeedP = document.createElement("p");
                        windspeedP.textContent = "Wind Speed: " + weekData[i].wind.speed

                        newArticle.append(newImg, newH3, tempP, humidityP, windspeedP)

                        weatherForecastDiv.append(newArticle)
                    }

                })
        })
}


searchButton.addEventListener("click", getWeather)