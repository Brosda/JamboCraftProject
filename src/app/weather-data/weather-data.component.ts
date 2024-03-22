import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { City } from '../city';

// city-weather is the componenet that handles displaying all of the cities weather data.
// This is the child of city componenet.
// TODO have this method refetch weather for the selected city?
// TODO have this method be able to have the date selected for weather checking.
// Inputs:
//  currentCity City
@Component({
  selector: 'city-weather',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="weather">
      <h2 class="weather-heading">Current weather for: {{currentCity?.viewValue}}</h2>
      <p class="weather-details">{{currentCity?.currentTemp}}</p>
      <p class="weather-details">{{currentCity?.currentWeekWeather}}</p>
    </section>
    `,
  styleUrls: ['./weather-data.component.css'],
})

export class WeatherDataComponent {

  @Input() currentCity: City | undefined;

}
