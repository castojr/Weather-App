$(document).ready(function() {
  var lat;
  var lon;
//Gets location coordinates 
  if (navigator.geolocation) {   navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
//Concat longitude & latitude in api url
      var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=916cd8dca1482357a8801dbdf0ca49c8";

      $.getJSON(url, function(data) {
        var tempF = Math.floor(data.main.temp * 9 / 5 - 459.67);
        var tempC = Math.floor(data.main.temp - 273.15);
        var humd = data.main.humidity;
        var city = data.name;
        var windSpeed = data.wind.speed;
        var weatherIcon = data.weather[0].icon;
        var iconURL = "http://api.openweathermap.org/img/w/"+ weatherIcon +".png";

        $("#tempF").html(tempF + "\xB0" + "F");
        $("#humd").html(humd + "%");
        $("#city").html(city);
        $("#windSpeed").html("Wind Speed: " + Math.floor(windSpeed / 0.44704) + " mph");   
        $("#weatherIcon").attr("src", iconURL);    
        //switches temperature to Fahrenheit        
        $("#option1").on("click", function() {
          $("#tempF").html(tempF + "\xB0" + "F")
        });
        //switches temperature to Celsius   
        $("#option2").on("click", function() {
          $("#tempF").html(tempC + "\xB0" + "C")
        });

      });

    });
  }
});
