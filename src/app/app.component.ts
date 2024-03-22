import { Component, Input, inject } from '@angular/core';
import { CityComponent } from './city/city.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { City } from './city';
import { CitiesService } from './cities.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CityComponent, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule
  ],
  template: `
    <main>
    <header class="brand-name"> Trip Planner
    </header>
    <section>
      <form>
        <mat-form-field>
          <select matNativeControl [(ngModel)]="selectedCity" name="city">
            <option value="" selected></option>
            @for (city of Cities; track city) {
              <option [value]="city.value">{{city.viewValue}}</option>
            }
          </select>
        </mat-form-field>
      </form>
    </section>
    <section class="content">
        <city [currentValue]="selectedCity"]></city>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Travel Planner';

  selectedCity: string;
  Cities: City[] = [];

  cityService: CitiesService = inject(CitiesService);

  constructor() {
    this.selectedCity = "london"
    this.Cities = this.cityService.getAllCities();
  }

  @Input() cityValue!: string
}
