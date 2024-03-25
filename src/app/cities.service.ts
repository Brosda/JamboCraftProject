import { Injectable } from '@angular/core';
import { City } from './city'

// TODO move this to the server side and remove.

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }
 
  async getAllCities(): Promise<City[]> {
    const url = 'http://localhost:4000/all'; 
    const data = await fetch(url)
    console.log(data)
    return await data.json() ?? [];
  }

  async getCityByValue(value: string): Promise<City | undefined> {
    const url = 'http://localhost:4000/city'; 
    const data = await fetch(`${url}?id=${value}`);
    console.log(data)
    return await data.json() ?? {};

  }
}
