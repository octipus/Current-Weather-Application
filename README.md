
# Current Weather Application - Task 1 

This project is part of the final mark assignment for Web Data using XML and JSON module - Birkbeck university 2018.

[Project URL](http://titan.dcs.bbk.ac.uk/~oconti01/wd/fma/task1/weather.html) 


## JSON

Create a JSON file `weather.json` with a structure capable of holding current 
weather data for cities across the UK. 
The file should be capable of holding the following data:

| No.| Data        | 
| -------- |:------| 
| 1| city id | 
| 2| city name      |
| 3| current conditions     |    
| 4| temperature | 
| 5| wind speed      |
| 6| wind direction     | 
| 6| wind chill factor     |


## JSON Schema

Create a JSON schema `weatherschema.json` against which weather data
from weather.json can be validated. The schema should enforce realistic
data types and restrictions.

Add dummy weather data for several UK cities to weather.json. The data
you add should validate against weatherschema.json.

## jQuery & HTML

Create a jQuery Ajax script `weather.js` that will extract data from
weather.json, and display that data on a HTML page `weather.html` in
table format. The data should automatically update at a realistic pre-set
interval. The outputted HTML should be formatted using CSS to professional standard.

Note that there should be **NO DELAY** in loading the data when the page is
first opened.

Also, include a weather icon (provided) for each city weather report.

---
