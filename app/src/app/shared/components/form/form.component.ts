import { HttpParams } from '@angular/common/http';
import {
  ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ToursFetchService from 'src/app/services/tours-fetch.service';
import { Country, Query, Tours } from '../../interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormComponent implements OnInit {
  @Output() onFetch = new EventEmitter<{next: Tours, query: Query}>();

  constructor(private toursFetchService: ToursFetchService) {}

  countryList = [
    { id: 552, cityId: 10, name: 'Турция' },
    { id: 553, cityId: 10, name: 'Тайланд' },
    { id: 552, cityId: 11, name: 'Турция' },
    { id: 554, cityId: 11, name: 'Чехия' },
  ];

  cities = [
    { id: 10, name: 'Алматы' },
    { id: 11, name: 'Астана' },
  ];

  countries: Country[] = [];

  departCity: string = '';

  country: string = '';

  date: Date = new Date();

  form: FormGroup;

  nights: number = 5;

  nightsTo: number = 15;

  ngOnInit() {
    this.form = new FormGroup({
      departCity: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      nights: new FormControl(5, [Validators.required, Validators.min(5)]),
      nightsTo: new FormControl(15, [Validators.required, Validators.max(15)]),
    });
    this.form.get('nights')?.valueChanges.subscribe((response) => {
      this.form.get('nightsTo')?.setValidators(Validators.min(response));
    });
    this.form.get('nightsTo')?.valueChanges.subscribe((response) => {
      this.form.get('nights')?.setValidators(Validators.max(response));
    });
  }

  checkCity($event: Event) {
    const inputValue = Number(($event.target as HTMLInputElement).value);

    this.countries = this.countryList.filter((c) => c.cityId === inputValue);
    const item = this.countries[0];
    this.form.get('country')?.setValue(item.id);
    console.log('event ', $event);
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submitted: ', this.form);
      this.departCity = this.cities.filter((c) => c.id === Number(this.form.get('departCity')?.value))[0].name;
      this.country = this.countryList.filter((c) => c.id === Number(this.form.get('country')?.value))[0].name;
      this.date = this.form.get('date')?.value;
      this.nights = this.form.get('nights')?.value;
      this.nightsTo = this.form.get('nightsTo')?.value;

      let queryParams = new HttpParams();
      queryParams = queryParams.append('departCity', this.form.get('departCity')?.value)
        .append('country', this.form.get('country')?.value)
        .append('date', this.form.get('date')?.value)
        .append('nights', this.form.get('nights')?.value)
        .append('nightsTo', this.form.get('nightsTo')?.value);
      
      this.toursFetchService.fetch(queryParams).subscribe((next: Tours) => {
        console.log('next', next);
        const query = {
          departCity: this.departCity,
          country: this.country,
          date: this.date,
          nights: this.nights,
          nightsTo: this.nightsTo,
        }
        this.onFetch.emit({next, query});
      });
    }
  }
}
