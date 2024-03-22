import { Component, inject } from '@angular/core';
import { CityComponent } from './city/city.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { City } from './city';
import { CitiesService } from './cities.service';

// app-root is the main root of the Trip Planner web application.
// This is the highest level parent component and should not be the child of any other componenets.
// It contains the title for the site, and a drop down menu to slect the city.
// The cities are retrieved on startup.
// The current city updates as the user selects cities from the dropdown.
// Is the parent of city component
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CityComponent, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule
  ],
  template: `
    <main>
    <div class="brand-header">
      <h1> {{title}}</h1>
    </div>
    <section class="picker">
      <form>
        <mat-form-field>
          <select matNativeControl [(ngModel)]="selectedCity" name="city" (change)="citySelected($any($event))">
            <option value="" selected></option>
            @for (city of Cities; track city) {
              <option [value]="city.value">{{city.viewValue}}</option>
            }
          </select>
        </mat-form-field>
      </form>
    </section>
    <section class="content">
        <city [currentCity]="currentCity"></city>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Trip Planner'; // Title of the site.

  selectedCity: string; // Currently selected city value.
  Cities: City[] = []; // List of all the cities.
  currentCity: City | undefined; // Currently selected city.

  cityService: CitiesService = inject(CitiesService);

  constructor() {
    this.selectedCity = "london" // default to london.
    this.Cities = this.cityService.getAllCities(); // Get all the avaiable cities.
    this.currentCity = this.cityService.getCityByValue(this.selectedCity) // Get the details of the selected city.
  }

  // This method updates the current city whenever a new city is selected.
  citySelected(event: MatFormField) {
    this.currentCity = this.cityService.getCityByValue(this.selectedCity)
  }

}
