package rest

import (
	"JamboCraftProject/city"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"os"
)

type restController struct {
	cityInterface cityInterface
	mux           *http.ServeMux
}

func New(cityController city.CityController) {
	mux := http.NewServeMux()

	controller := restController{
		mux:           mux,
		cityInterface: cityController,
	}

	mux.HandleFunc("/all", controller.getAll)
	mux.HandleFunc("/city", controller.getCity)

	fmt.Printf("Server listening on port  http://localhost:4000\n")
	err := http.ListenAndServe(":4000", mux)
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if err != nil {
		fmt.Printf("error starting server: %s\n", err)
		os.Exit(1)
	}
}

func (c *restController) getAll(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	//ctx := r.Context()

	allCities := c.cityInterface.GetAllCities()
	var response []CityResponse
	for _, city := range allCities {
		response = append(response, c.convertCity(city))
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func (c *restController) getCity(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	var id string
	hasID := r.URL.Query().Has("id")
	if hasID {
		id = r.URL.Query().Get("id")
	} else {
		fmt.Printf("no ID \n")
		id = "london"
	}

	city := c.cityInterface.GetCity(r.Context(), id)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(c.convertCity(city))
}

func (restController) convertCity(city city.City) CityResponse {
	return CityResponse(city)
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
