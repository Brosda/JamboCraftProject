package main

import (
	"JamboCraftProject/city"
	"JamboCraftProject/rest"
	"JamboCraftProject/swagger"
)

func main() {
	config := swagger.NewConfiguration()
	weatherApi := swagger.NewAPIClient(config)
	cityController := city.New(weatherApi)
	rest.New(cityController)
}
