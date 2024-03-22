import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDataComponent } from '../weather-data/weather-data.component';
import { CitiesService } from '../cities.service';
import { City } from '../city';


@Component({
  selector: 'city',
  standalone: true,
  imports: [
    CommonModule,
    WeatherDataComponent
  ],
  template: `

    <section class="details">
      <h2 class="details-heading">{{ currentCity?.viewValue }}</h2>
      <p class="details-location">{{ currentCity?.details}}</p>
    </section>
    <section class="weather">
      <city-weather></city-weather>
    </section>
  `,
  styleUrls: ['./city.component.css'],
})

export class CityComponent {

  @Input() currentValue!: string

  currentCity: City | undefined;

  cityService: CitiesService = inject(CitiesService);

  constructor() {
    this.currentCity = this.cityService.getCityByValue(this.currentValue);
  }
}
