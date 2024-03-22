import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { City } from '../city';

@Component({
  selector: 'city-weather',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="weather">
    <h2 class="weather-heading">Current weather</h2>
    </section>
    `,
  styleUrls: ['./weather-data.component.css'],
})

export class WeatherDataComponent {

  @Input() city!: City;

}
