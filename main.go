package main

import (
	"JamboCraftProject/city"
	"JamboCraftProject/rest"
	"JamboCraftProject/swagger"
)

// main starts all the needed controllers in the correct order.
func main() {
	config := swagger.NewConfiguration()
	weatherApi := swagger.NewAPIClient(config)
	cityController := city.New(weatherApi)
	rest.New(cityController)
}
