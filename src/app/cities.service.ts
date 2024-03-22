import { Injectable } from '@angular/core';
import { City } from './city'

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  cityList: City[] = [
    {
      value: "london",
      viewValue: "London",
      details: "London is a city in England. It has a population of 8.982 million people."
    },
    {
      value: "newyork",
      viewValue: "New York",
      details: "New York is a city in the USA. It has a population of 8.468 million people."
    },
    {
      value: "edmonton",
      viewValue: "Edmonton",
      details: "Edmonton is a city in Canada. It has a population of 981,280 people"
    }

  ];

  getAllCities(): City[] {
    return this.cityList;
  }

  getCityByValue(value: string): City | undefined {
    return this.cityList.find(housingLocation => housingLocation.value === value);
  }
}
