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
      details: "London is a city in England"
    },
    {
      value: "newyork",
      viewValue: "New York",
      details: "New York is a city in the USA"
    },
    {
      value: "edmonton",
      viewValue: "Edmonton",
      details: "Edmonton is a city in Canada"
    }

  ];

  getAllCities(): City[] {
    return this.cityList;
  }

  getCityByValue(value: string): City | undefined {
    return this.cityList.find(housingLocation => housingLocation.value === value);
  }
}
