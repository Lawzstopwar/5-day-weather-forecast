

fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=0e1d4f15c175dd06881d40b79606df7b")
.then(response => response.json())
.then(data => {

    console.log(data);

})
fetch ("https://api.openweathermap.org/data/2.5/forecast?lat=44&lon=10.99&appid=0e1d4f15c175dd06881d40b79606df7b")
.then(response => response.json())
.then(data => {

    console.log(data);
})