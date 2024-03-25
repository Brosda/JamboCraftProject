package city

import "JamboCraftProject/swagger"

type City struct {
	Value              string
	ViewValue          string
	Details            string
	CurrentTemp        string
	CurrentWeekWeather string
}

var cityList = []City{
	{
		Value:              "london",
		ViewValue:          "London",
		Details:            "London is a city in England. It has a population of 8.982 million people.",
		CurrentTemp:        "",
		CurrentWeekWeather: "",
	},
	{
		Value:              "newyork",
		ViewValue:          "New York",
		Details:            "New York is a city in the USA. It has a population of 8.468 million people.",
		CurrentTemp:        "",
		CurrentWeekWeather: "",
	},
	{
		Value:              "edmonton",
		ViewValue:          "Edmonton",
		Details:            "Edmonton is a city in Canada. It has a population of 981,280 people",
		CurrentTemp:        "",
		CurrentWeekWeather: "",
	},
}

type ForecastResponse struct {
	Location swagger.Location `json:"location,omitempty"`
	Current  swagger.Current  `json:"current,omitempty"`
	Forecast swagger.Forecast `json:"forecast,omitempty"`
}
