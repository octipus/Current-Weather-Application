/*Oconti01 - WDFMA 2018
Task1 - Create a current weather application*/

(function updateWeather() {
 	setTimeout(function() {
 		$.ajax( {
			 url:'weather.json' ,
			 type: 'GET' ,
			 dataType: 'json' ,
       mimeType: 'text/html', //fix console error
			 success: function(response){
				 var sTxt = '<table><tr><th>City</th><th>Conditions</th><th>Temperature</th> <th>Wind Speed</th> <th>Wind Direction</th> <th>Wind Chill Factor</th></tr>'; //define table
				 $('#weatherContainer').html(' ');


			   $.each(response.weather, function(index) { //retrieve data
             var icon;
             switch (response.weather[index].currentConditions) { //switch case for icons
               case "Cloud":
                  icon = '<img src="./weather_icons/cloud.png" alt="cloud" width="22px"/>';
                  break;
               case "Hail":
                  icon = '<img src="./weather_icons/hail.png" alt="hail" width="22px"/>';
                  break;
               case "Heavy Cloud":
                  icon = '<img src="./weather_icons/heavy cloud.png" alt="heavy-clouds" width="22px"/>';
                  break;
               case "Heavy Rain":
                  icon = '<img src="./weather_icons/heavy rain.png" alt="heavy-rain" width="22px"/>';
                  break;
               case "Rain":
                  icon = '<img src="./weather_icons/rain.png" alt="rain" width="22px"/>';
                  break;
               case "Sleet":
                  icon = '<img src="./weather_icons/sleet.png" alt="sleet" width="22px"/>';
                  break;
               case "Snow":
                  icon = '<img src="./weather_icons/snow.png" alt="snow" width="22px"/>';
                  break;
               case "Sun":
                  icon = '<img src="./weather_icons/sun.png" alt="sun" width="22px"/>';
                  break;
               case "Sun and Clouds":
                  icon = '<img src="./weather_icons/sun and cloud.png" alt="sun-clouds" width="22px"/>';
                  break
               case "Thunderstorm":
                icon = '<img src="./weather_icons/thunderstorm.png" alt="thunderstorm" width="22px"/>';
                break;
             }

      			 sTxt += '<tr><td>' +  //table data
      			    response.weather[index].cityName +
             ' </td><td id="#condition">' +
                icon +
      			    response.weather[index].currentConditions +
      			 ' </td><td>' +
      			    response.weather[index].temperature +
      			 '&#8451; </td><td>' +
      			    response.weather[index].windSpeed +
      			 'mph </td><td>' +
      			    response.weather[index].windDirection +
      			 ' </td><td>' +
      			    response.weather[index].windChillFactor +
      			 '</td></tr>';
  			  });
			      sTxt += '</table>'; // finish table
			   $(' #weatherContainer').append(sTxt);
			   updateWeather();
			 },

		   error: function() {
			 $('#infoContainer').html(' <p>An error has occurred while retriving the data</p>');//display error if fail to retrieve data
			}
    });
	}, 250); // timer
})();
