$(document).ready(function() {
  getURL(); 
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
  getJson(url);
}

function getJson(url) {
  $.ajax({
      format: "jsonp",
      dataType: "jsonp",
      url: url,
      success: function(json) {
        var cel = fahrenheit_to_сelsius(json.currently.temperature);
        $("#weather-current").html( (cel.toFixed(1))+"   ° ");
        //$("#weather-high").html("The highest day temperature: "+fahrenheit_to_сelsius(Math.round(json.daily.data[0].temperatureMax)).toFixed(1)+"°");
        //$("#weather-low").html("The lowest day temperature: "+fahrenheit_to_сelsius(Math.round(json.daily.data[0].temperatureMin)).toFixed(1)+"°");
        //getIcon(json.currently.icon);
      }
    })
      }

function fahrenheit_to_сelsius(temperature_in_fahrenheit) {
    return (temperature_in_fahrenheit - 32) * 5 / 9;
}

window.onload = function () {
    hideAddressBar();
    window.addEventListener("orientationchange", function () {
        hideAddressBar();
    }, false);
}

function hideAddressBar() {
    setTimeout(function () {
        document.body.style.height = window.outerHeight + 'px';
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1100);
    }, 1000);
    return false;
}

$(document).ready(function () {
    (function () {
        function updateClock(currentTime) {
            var clockElement = document.getElementById("clock");
            clockElement.innerHTML = currentTime.toLocaleTimeString();
        }

        function updateDate(currentTime) {
            var month = currentTime.getMonth() + 1;
            var day = currentTime.getDate();
            var weekDay = currentTime.getDay();
            var year = currentTime.getFullYear();
            var dateTag = document.getElementById("date");
            dateTag.innerHTML = getWeekDayName(weekDay) + ",\t" + day + "\t" + getMonthName(month);
        }

        setInterval(() => {
            var dateTime = new Date();
            updateClock(dateTime);
            updateDate(dateTime);
        }, 1000);

        function getMonthName(month) {
            switch (month) {
                case 1: return "January";
                case 2: return "February";
                case 3: return "March";
                case 4: return "April";
                case 5: return "May";
                case 6: return "June";
                case 7: return "July";
                case 8: return "August";
                case 9: return "September";
                case 10: return "October";
                case 11: return "November";
                case 12: return "December";
            }
        }

        function getWeekDayName(weekDay) {
            switch (weekDay) {
                case 1: return "Monday";
                case 2: return "Tuesday";
                case 3: return "Wednesday";
                case 4: return "Thuersday";
                case 5: return "Friday";
                case 6: return "Saturday";
                case 0: return "Sunday";
            }
        }
        $(document).ready(function() 
{
    get_exchange_rates();

  function get_exchange_rates()
  {
      //endpoint = 'convert';
      endpoint = 'latest';
      access_key = '2f38462c185fa4a8c730be3b33046a8e';
      $.ajax
      ({
          url: 'http://data.fixer.io/api/'+endpoint+'?access_key='+access_key+'&base=EUR&symbols=UAH,USD',
          dataType: 'jsonp',
          success: function(json)
           {
              eur_to_uah = json.rates.UAH;
              eur_to_usd = json.rates.USD;
              usd_to_uah = eur_to_uah / eur_to_usd;
              $("#eur_to_uah").html(eur_to_uah.toFixed(2));
              $("#usd_to_uah").html(usd_to_uah.toFixed(2));
              
          }
      });
  }
})
    })();
});
