package rest

type CityResponse struct {
	Value              string `json:"value"`
	ViewValue          string `json:"view_value"`
	Details            string `json:"details"`
	CurrentTemp        string `json:"current_temp"`
	CurrentWeekWeather string `json:"current_week_weather"`
}
