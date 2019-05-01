$(document).ready(function() {
  getURL(); 
  getIcon();
});



function getURL() {
  let latitude = 49.85;
  let longitude = 24.017
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitude  = position.coords.latitude;
        longitude = position.coords.longitude;
      },
      () => {
        console.log("Problems with geolocation");
      }
    );
  }

  var url = (`https://api.darksky.net/forecast/9728d94d2d32a542e30713c14ee91ce1/${latitude},${longitude}`);
  //console.log(url);
  getJson(url);
}

function getJson(url) {
  //started getJson;
  $.ajax({
      format: "jsonp",
      dataType: "jsonp",
      url: url,
      success: function(json) {
        var cel = fahrenheit_to_сelsius(json.currently.temperature);
        $("#weather-current").html("Current temperature:  " + (cel.toFixed(1))+"   ° ");
        $("#weather-high").html("The highest day temperature: "+fahrenheit_to_сelsius(Math.round(json.daily.data[0].temperatureMax)).toFixed(1)+"°");
        $("#weather-low").html("The lowest day temperature: "+fahrenheit_to_сelsius(Math.round(json.daily.data[0].temperatureMin)).toFixed(1)+"°");
        //getIcon(json.currently.icon);
      }

    })

  }

function fahrenheit_to_сelsius(temperature_in_fahrenheit) {
    return (temperature_in_fahrenheit - 32) * 5 / 9;
}

function getIcon()
{
  //var iconDescription = icon.toUpperCase().replace( /-/g, "_");
  //alert(iconDescription) ;
  var icons = new Skycons({"color": "white"});
  icons.set("a", Skycons.SNOW);
  icons.play();
}