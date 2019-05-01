$(document).ready(function() 
{
    get_exchange_rates();

  function get_exchange_rates()
  {
      //endpoint = 'convert';
      endpoint = 'latest';
      access_key = '2f38462c185fa4a8c730be3b33046a8e';

      /*from = 'EUR';
      to = 'UAH';
      amount = '1';*/
// get the most recent exchange rates via the "latest" endpoint:
      $.ajax
      ({
          url: 'http://data.fixer.io/api/'+endpoint+'?access_key='+access_key+'&base=EUR&symbols=UAH,USD',
          //url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,
          dataType: 'jsonp',
          success: function(json)
           {
              // exchange rata data is stored in json.rates
              //alert(json.rates.GBP);
              eur_to_uah = json.rates.UAH;
              eur_to_usd = json.rates.USD;
              usd_to_uah = eur_to_uah / eur_to_usd;
              $("#eur_to_uah").html(eur_to_uah.toFixed(2));
              $("#usd_to_uah").html(usd_to_uah.toFixed(2));
              //$("#b").html(json.rates.EUR + " " + json.base);
              //$("#c").html(json.rates.JPY + " " + json.base);
              // base currency is stored in json.base
              //alert(json.base);
                //$("#eur_to_uah").html(json.result);
              // timestamp can be accessed in json.timestamp
              //alert(json.timestamp);
          }
      });
  }
})
/*function get_usd(){
    $.get("https://api.fixer.io/latest?access_key=e3348cf61a516ccbfd443c029b621805&base=USD&symbols=UAH,EUR", function (json) {
        $("#usd_to_uah").html(json.rates.UAH);
    }); }
*/

$(document).ready(function(){
	//getRate();
	//getHistoryRate();
	$('input[type="date"]').on('input', getHistoryRate);
});

function getRate(){
	// https://api.coindesk.com/v1/bpi/currentprice.json
	$.get(
		"https://api.coindesk.com/v1/bpi/currentprice.json",
		function(data){
			data = JSON.parse(data);
			console.log(data);
		}
	);
}

function getHistoryRate(){
	// https://api.coindesk.com/v1/bpi/currentprice.json
	$.get(
		"https://api.coindesk.com/v1/bpi/historical/close.json",
		{
			"start" : $('#date1').val(),
			"end" : $('#date2').val()
		},
		function(data){
			data = JSON.parse(data);
			console.log(data);
		}
	);
}
