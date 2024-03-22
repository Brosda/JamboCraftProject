import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDataComponent } from '../weather-data/weather-data.component';
import { City } from '../city';

// City is the componenet that displays a chosen cities details.
// Is the child of the main app.
// Is the parent of weather data.
// Inputs:
//  currentCity city
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
      <p class="details-description">{{ currentCity?.details}}</p>
    </section>
    <section class="weather">
      <city-weather [currentCity]="currentCity"></city-weather>
    </section>
  `,
  styleUrls: ['./city.component.css'],
})

export class CityComponent {
  @Input() currentCity!: City | undefined

}
