$(document).ready(function() {

  var lat;
  var lon;

  
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=916cd8dca1482357a8801dbdf0ca49c8";
 
  $.getJSON(url, function(data) {
    
    var tempF = Math.floor(data.main.temp * 9/5 - 459.67); 
    var tempC = Math.floor(data.main.temp - 273.15);
    var humd = data.main.humidity;
    var city = data.name;
    var windSpeed = data.wind.speed;
    var weatherMain = data.weather.main;
    var weatherDesc = data.weather.description;
    var weatherIcon = data.weather.icon;
    
    $("#tempF").html(tempF);
    $("#tempC").html(tempC);
    $("#humd").html(humd);
    $("#city").html(city);
    $("#windSpeed").html(windSpeed);
    
    $("#weatherMain").html(weatherMain);
    $("#weatherDesc").html(weatherDesc);
    $("#weatherIcon").html(weatherIcon);
    
  });
  });
} 
});

