// package city is in charge of handling all the city data and calling the weather api interface to retrieve weather information.
package city

import (
	"JamboCraftProject/swagger"
	"context"
	"fmt"
)

// The controller for the city package.
type CityController struct {
	weatherAPIKey string
	weather       weatherInterface
}

// New creates a new CityController.
func New(weatherAPI *swagger.APIClient) CityController {
	return CityController{
		weatherAPIKey: "3f0fb90c2ed34571bcd152359242503",
		weather:       weatherAPI.APIsApi,
	}
}

// GetAllCities returns a list of all the cities currently available for travel planning.
func (c CityController) GetAllCities() []City {

	// TODO call a database to get this information.
	// Handles errors.
	return cityList
}

// GetCity gets the weather details for one specified city.
// returns a city.
func (c CityController) GetCity(ctx context.Context, id string) City {

	// add the weatherAPI key to the context.
	auth := context.WithValue(ctx, swagger.ContextAPIKey, swagger.APIKey{
		Key: c.weatherAPIKey,
	})

	// Find the city the passed in ID is referring to.
	// TODO cityList should be stored in a database.
	for _, city := range cityList {
		if city.Value == id {
			// Call the pregenerated weather forecast endpoint
			forecast, _, err := c.weather.ForecastWeather(auth, city.ViewValue, 5, nil)

			if err != nil {
				fmt.Println(err.Error()) //TODO return this error
				return city              //Return city with no weather data (TODO remove)
			} else {
				city.CurrentTemp = fmt.Sprintf("The current temperature is: %f°C.", forecast.Current.TempC) //TODO make this a converter
				var weeklyTempString string
				for i := 0; i < 5; i++ { //TODO make this max a passed in variable to allow forecast range selection.
					// TODO make this a converter func
					weeklyTempString = fmt.Sprintf("The average temperature on %s is: %f°C.\n", forecast.Forecast.Forecastday[i].Date, forecast.Forecast.Forecastday[i].Day.AvgtempC)
					city.CurrentWeekWeather += weeklyTempString

				}
			}
			return city
		}
	}
	// TODO return an error here.
	return cityList[0]
}
