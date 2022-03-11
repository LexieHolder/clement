var locationFormEl = document.querySelector("#location-form");
var searchButton = document.querySelector("#search-btn");
var locationInputEl = document.querySelector("#location");
var apiKey = "17af785016eb9522994d1ece0b4fd082";


//search weather button
var formSubmitHandler = function(event) {
    var  location = locationInputEl.ariaValueMax.trim();
    
    if (location) {
        getWeather(location);

        //clear old content
        weatherContainerEl.textContent = "";
        locationInputEl.value = "";
    } else {
        alert("please enter a valid location");
    }
};

var buttonClickHandler = function(event) {
    var location = event.target.getAttribute("#location");

    if (location) {
        getWeather(location);
        locationFormEl.textContent = "";
    }
};

//get weather
function getWeather(location) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q" + location + apiKey;
    fetch(queryUrl).then(function(response) {
        return response.json();
    }); response.json().then(function(data) {
        displayWeather (data);
    }) .then(console.log(location));
};