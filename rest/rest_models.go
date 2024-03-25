package rest

// CityResponse is the response object for of a city and its details.
type CityResponse struct {
	Value              string `json:"value"`
	ViewValue          string `json:"view_value"`
	Details            string `json:"details"`
	CurrentTemp        string `json:"current_temp"`
	CurrentWeekWeather string `json:"current_week_weather"`
}
