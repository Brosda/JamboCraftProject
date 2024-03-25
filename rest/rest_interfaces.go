package rest

import (
	"JamboCraftProject/city"
	"context"
)

type cityInterface interface {
	GetAllCities() []city.City
	GetCity(ctx context.Context, id string) city.City
}
