package city

import (
	"JamboCraftProject/swagger"
	"context"
	"net/http"
)

type weatherInterface interface {
	ForecastWeather(ctx context.Context, q string, days int32, localVarOptionals *swagger.APIsApiForecastWeatherOpts) (swagger.ForecastResponse, *http.Response, error)
}
