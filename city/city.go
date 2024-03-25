package city

import (
	"JamboCraftProject/swagger"
	"context"
	"fmt"
)

type CityController struct {
	weatherAPIKey string
	weather       weatherInterface
}

func New(weatherAPI *swagger.APIClient) CityController {
	return CityController{
		weatherAPIKey: "3f0fb90c2ed34571bcd152359242503",
		weather:       weatherAPI.APIsApi,
	}
}

func (c CityController) GetAllCities() []City {

	return cityList
}

func (c CityController) GetCity(ctx context.Context, id string) City {

	auth := context.WithValue(ctx, swagger.ContextAPIKey, swagger.APIKey{
		Key: c.weatherAPIKey,
	})

	for _, city := range cityList {
		if city.Value == id {
			forecast, _, err := c.weather.ForecastWeather(auth, city.ViewValue, 5, nil)

			if err != nil {
				fmt.Println(err.Error())
				return city
			} else {
				city.CurrentTemp = fmt.Sprintf("The current temperature is: %f°C.", forecast.Current.TempC)
				var weeklyTempString string
				for i := 0; i < 5; i++ {
					weeklyTempString = fmt.Sprintf("The average temperature on %s is: %f°C.\n", forecast.Forecast.Forecastday[i].Date, forecast.Forecast.Forecastday[i].Day.AvgtempC)
					city.CurrentWeekWeather += weeklyTempString

				}
			}
			return city

		}
	}
	return cityList[0]
}
