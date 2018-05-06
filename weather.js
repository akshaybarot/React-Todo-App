	$(document).ready(function () {
		$('#btn').click(function () {
			var city = $('#txtCity').val();
			//+ ',' + $('#txtCountry').val();
			var resultElement = $('#resultDiv');


			if (city != '') {
				$.ajax({
					url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=feb4d45809df8140d1910603b3ad7e3e",
					type: 'GET',


					dataType: 'jsonp',
					success: function (data) {
						var widget = show(data);
						$('#resultDiv').html(widget);

						$('#txtCity').val('');
					}

				});
			} else {
				$("#resultDiv").html("<div class='alert alert-danger text-center'><a href = '#'class = 'close'data - dismiss = 'alert'aria - label = 'close'></a> Field Cannot be Empty</div > ");
			}

		});

		function show(data) {
			return "<h2 class='text-center'>Current Weather for " + data.name + ', ' + data.sys.country + "</h2>" +

				"<p><b>Weather</b>: " + data.weather[0].main + "</p>" +
				"<p><strong>Description</strong>: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>" + data.weather[0].description + "</p>" +

				"<p><strong>Temperature</strong>: " + data.main.temp + "&deg;C</p>" +
				"<p><strong>Pressure</strong>: " + data.main.pressure + "hpa</p>" +
				"<p><strong>Humidity</strong>: " + data.main.humidity + "%</p>" +
				"<p><strong>Minimum Temperature</strong>: " + data.main.temp_min + "&deg;C</p>" +
				"<p><strong>Maximum Temperature</strong>: " + data.main.temp_max + "&deg;C</p>" +
				"<p><strong>Wind Speed</strong>: " + data.wind.speed + " m/s</p>" +
				"<p><strong>Wind Direction</strong>: " + data.wind.deg + "&deg;</p>";




		}


	});
